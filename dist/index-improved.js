// @ts-ignore
import { definePlugin } from "@vencord/types";
// @ts-ignore
import { findByProps } from "@webpack";
const CSS = `
#multi-server-leaver-panel {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 8px;
    background: var(--background-secondary);
    border-radius: 8px;
    margin: 8px 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.msl-toggle-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 12px;
    background: var(--background-tertiary);
    border: 2px solid var(--brand-500);
    border-radius: 6px;
    color: var(--interactive-normal);
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    transition: all 0.2s ease;
    user-select: none;
}

.msl-toggle-btn:hover {
    background: var(--brand-500);
    color: white;
    transform: scale(1.05);
}

.msl-toggle-btn.msl-active {
    background: var(--brand-500);
    color: white;
    box-shadow: 0 0 12px rgba(88, 101, 242, 0.5);
}

.msl-leave-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 12px;
    background: #f04747;
    border: 2px solid #f04747;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    transition: all 0.2s ease;
    user-select: none;
}

.msl-leave-btn:hover:not(:disabled) {
    background: #d63d3d;
    border-color: #d63d3d;
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(240, 71, 71, 0.5);
}

.msl-leave-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.msl-counter {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background: var(--background-tertiary);
    border-radius: 6px;
    color: var(--interactive-normal);
    font-size: 12px;
    font-weight: 600;
    min-height: 24px;
    transition: all 0.2s ease;
}

.msl-counter:not(:empty) {
    background: var(--brand-500);
    color: white;
    box-shadow: 0 0 8px rgba(88, 101, 242, 0.4);
}

.multi-server-leaver-selected {
    position: relative !important;
    border-radius: 12px !important;
    box-shadow: 0 0 0 3px var(--brand-500), 0 0 12px rgba(88, 101, 242, 0.6) !important;
    transform: scale(1.08) !important;
    transition: all 0.15s ease !important;
    animation: msl-pulse-ring 2s infinite;
}

.multi-server-leaver-selected::after {
    content: "✓";
    position: absolute;
    top: -8px;
    right: -8px;
    width: 24px;
    height: 24px;
    background: var(--brand-500);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    z-index: 100;
}

@keyframes msl-pulse-ring {
    0% { box-shadow: 0 0 0 3px var(--brand-500), 0 0 12px rgba(88, 101, 242, 0.6); }
    50% { box-shadow: 0 0 0 5px var(--brand-500), 0 0 20px rgba(88, 101, 242, 0.8); }
    100% { box-shadow: 0 0 0 3px var(--brand-500), 0 0 12px rgba(88, 101, 242, 0.6); }
}
`;
export default definePlugin({
    name: "Multi Server Leaver",
    description: "Selecteer en verlaat meerdere Discord servers tegelijk met bevestiging en eigenaar-bescherming",
    authors: [{ name: "Plugin Developer", id: "0n" }],
    version: "1.0.0",
    selectedGuilds: new Map(),
    selectMode: false,
    isLeaving: false,
    async start() {
        // Inject CSS
        const style = document.createElement("style");
        style.id = "multi-server-leaver-styles";
        style.textContent = CSS;
        document.head.appendChild(style);
        this.createControlPanel();
        this.patchGuildIcons();
    },
    stop() {
        this.cleanup();
    },
    createControlPanel() {
        const container = document.createElement("div");
        container.id = "multi-server-leaver-panel";
        container.className = "msl-container";
        const toggleBtn = document.createElement("button");
        toggleBtn.className = "msl-toggle-btn";
        toggleBtn.innerHTML = '📋 Select Mode';
        toggleBtn.title = "Toggle selection mode (click servers to select/deselect)";
        const leaveBtn = document.createElement("button");
        leaveBtn.className = "msl-leave-btn";
        leaveBtn.innerHTML = '🚪 Leave Selected';
        leaveBtn.style.display = "none";
        leaveBtn.disabled = true;
        leaveBtn.title = "Leave all selected servers (shows confirmation)";
        const counter = document.createElement("div");
        counter.className = "msl-counter";
        counter.textContent = "0";
        container.appendChild(toggleBtn);
        container.appendChild(leaveBtn);
        container.appendChild(counter);
        // Find the guild list parent
        const guildListParent = document.querySelector('nav[aria-label="Servers"]')?.parentElement;
        if (!guildListParent) {
            console.error("[Multi Server Leaver] Could not find guild list parent");
            return;
        }
        guildListParent.appendChild(container);
        // Event listeners
        toggleBtn.addEventListener("click", () => this.toggleSelectMode(toggleBtn, leaveBtn, counter));
        leaveBtn.addEventListener("click", () => this.leaveSelectedGuilds(leaveBtn, counter, toggleBtn));
    },
    toggleSelectMode(toggleBtn, leaveBtn, counter) {
        this.selectMode = !this.selectMode;
        toggleBtn.classList.toggle("msl-active", this.selectMode);
        leaveBtn.style.display = this.selectMode ? "flex" : "none";
        if (!this.selectMode) {
            this.selectedGuilds.clear();
            this.updateCounterDisplay(counter);
            document
                .querySelectorAll(".multi-server-leaver-selected")
                .forEach(el => el.classList.remove("multi-server-leaver-selected"));
        }
    },
    patchGuildIcons() {
        // Get guild containers and add click listeners
        const updateGuildClickHandlers = () => {
            const guildButtons = document.querySelectorAll('a[href*="/channels/"], div[data-tooltip-content]');
            guildButtons.forEach((btn) => {
                if (btn.classList.contains("msl-patched"))
                    return;
                btn.classList.add("msl-patched");
                btn.addEventListener("click", (e) => {
                    if (!this.selectMode)
                        return;
                    const guildId = this.extractGuildIdFromElement(btn);
                    if (!guildId)
                        return;
                    e.stopPropagation();
                    e.preventDefault();
                    const GuildStore = findByProps("getGuild");
                    if (!GuildStore)
                        return;
                    const guild = GuildStore.getGuild(guildId);
                    if (!guild)
                        return;
                    if (this.selectedGuilds.has(guildId)) {
                        this.selectedGuilds.delete(guildId);
                    }
                    else {
                        this.selectedGuilds.set(guildId, {
                            id: guild.id,
                            name: guild.name,
                            ownerId: guild.ownerId
                        });
                    }
                    this.updateGuildHighlight(btn);
                    this.updateCounterDisplay(document.querySelector(".msl-counter"));
                }, true);
            });
        };
        // Initial patch
        updateGuildClickHandlers();
        // Watch for new guilds being added to DOM
        const observer = new MutationObserver(() => updateGuildClickHandlers());
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        // Store observer for cleanup
        this.guildObserver = observer;
    },
    extractGuildIdFromElement(element) {
        // Try to get guild ID from href
        const href = element.getAttribute("href");
        if (href) {
            const match = href.match(/\/channels\/(\d+)/);
            if (match)
                return match[1];
        }
        // Try to get from data attributes
        const guildId = element.getAttribute("data-guild-id");
        if (guildId)
            return guildId;
        // Try to get from parent elements
        let current = element;
        for (let i = 0; i < 5; i++) {
            current = current.parentElement;
            if (!current)
                break;
            const id = current.getAttribute("data-guild-id");
            if (id)
                return id;
            const href2 = current.getAttribute("href");
            if (href2) {
                const match = href2.match(/\/channels\/(\d+)/);
                if (match)
                    return match[1];
            }
        }
        return null;
    },
    updateGuildHighlight(element) {
        const guildId = this.extractGuildIdFromElement(element);
        if (!guildId)
            return;
        if (this.selectedGuilds.has(guildId)) {
            element.classList.add("multi-server-leaver-selected");
        }
        else {
            element.classList.remove("multi-server-leaver-selected");
        }
    },
    updateCounterDisplay(counter) {
        if (!counter)
            return;
        counter.textContent = this.selectedGuilds.size.toString();
    },
    async leaveSelectedGuilds(leaveBtn, counter, toggleBtn) {
        if (this.selectedGuilds.size === 0) {
            alert("Geen servers geselecteerd!");
            return;
        }
        if (this.isLeaving) {
            alert("Nog aan het verlaten van servers...");
            return;
        }
        const GuildStore = findByProps("getGuild");
        const UserStore = findByProps("getCurrentUser");
        const RESTStore = findByProps("post", "get", "delete");
        if (!GuildStore || !UserStore || !RESTStore) {
            console.error("[Multi Server Leaver] Could not find required stores");
            alert("Fout: Kon Discord API niet bereiken");
            return;
        }
        const currentUserId = UserStore.getCurrentUser()?.id;
        if (!currentUserId) {
            alert("Fout: Kon gebruiker niet identificeren");
            return;
        }
        // Filter guilds
        const ownedGuilds = [];
        const guildsToLeave = [];
        for (const guild of this.selectedGuilds.values()) {
            if (guild.ownerId === currentUserId) {
                ownedGuilds.push(guild);
            }
            else {
                guildsToLeave.push(guild);
            }
        }
        if (guildsToLeave.length === 0) {
            alert("⚠️ Je bent eigenaar van alle geselecteerde servers. Je kan ze niet verlaten.");
            return;
        }
        // Show confirmation
        const guildNames = guildsToLeave.map(g => `• ${g.name}`).join("\n");
        const message = `Ben je zeker dat je deze servers wilt verlaten?\n\n${guildNames}`;
        if (!confirm(message)) {
            return;
        }
        this.isLeaving = true;
        leaveBtn.disabled = true;
        let successCount = 0;
        let failCount = 0;
        for (const guild of guildsToLeave) {
            try {
                await RESTStore.delete(`/users/@me/guilds/${guild.id}`);
                successCount++;
                console.log(`[Multi Server Leaver] Left guild: ${guild.name} (${guild.id})`);
            }
            catch (error) {
                failCount++;
                console.error(`[Multi Server Leaver] Failed to leave guild ${guild.id}:`, error);
            }
            // Rate limit: 150ms between requests
            await new Promise(resolve => setTimeout(resolve, 150));
        }
        // Clean up
        this.selectedGuilds.clear();
        this.selectMode = false;
        this.isLeaving = false;
        leaveBtn.disabled = true;
        leaveBtn.style.display = "none";
        toggleBtn.classList.remove("msl-active");
        this.updateCounterDisplay(counter);
        document
            .querySelectorAll(".multi-server-leaver-selected")
            .forEach(el => el.classList.remove("multi-server-leaver-selected"));
        // Feedback
        let resultMessage = `Voltooid! ${successCount} server(s) verlaten`;
        if (ownedGuilds.length > 0) {
            resultMessage += `\n\n⚠️ ${ownedGuilds.length} server(s) overgeslagen (je bent eigenaar)`;
        }
        if (failCount > 0) {
            resultMessage += `\n\n❌ ${failCount} server(s) konden niet worden verlaten`;
        }
        alert(resultMessage);
    },
    cleanup() {
        const panel = document.getElementById("multi-server-leaver-panel");
        if (panel)
            panel.remove();
        const style = document.getElementById("multi-server-leaver-styles");
        if (style)
            style.remove();
        const observer = this.guildObserver;
        if (observer)
            observer.disconnect();
        document
            .querySelectorAll(".msl-patched")
            .forEach(el => el.classList.remove("msl-patched"));
    }
});
//# sourceMappingURL=index-improved.js.map