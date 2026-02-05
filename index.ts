import { definePlugin } from "@vencord/types";
import { findByProps } from "@vencord/utils";

// @ts-ignore - Vencord types only available at runtime
// @ts-ignore

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
    description: "Selecteer en verlaat meerdere Discord servers tegelijk",
    authors: [{ name: "Plugin Developer", id: "0n" }],
    version: "1.0.0",

    selectedGuilds: new Set<string>(),
    selectMode: false,
    isLeaving: false,

    start() {
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

    patchGuildIcons() {
        const self = this;
        const updateGuildClickHandlers = () => {
            const guildButtons = document.querySelectorAll(
                'a[href*="/channels/"], div[data-tooltip-content]'
            );

            guildButtons.forEach((btn: Element) => {
                if ((btn as any)._mslPatched) return;
                (btn as any)._mslPatched = true;

                btn.addEventListener(
                    "click",
                    (e: Event) => {
                        if (!self.selectMode) return;

                        const guildId = self.extractGuildIdFromElement(btn as HTMLElement);
                        if (!guildId) return;

                        e.stopPropagation();
                        e.preventDefault();

                        if (self.selectedGuilds.has(guildId)) {
                            self.selectedGuilds.delete(guildId);
                        } else {
                            self.selectedGuilds.add(guildId);
                        }

                        self.updateGuildHighlight(btn as HTMLElement);
                        self.updateCounterDisplay();
                    },
                    true
                );
            });
        };

        updateGuildClickHandlers();

        const observer = new MutationObserver(() => updateGuildClickHandlers());
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        (this as any).guildObserver = observer;
    },

    extractGuildIdFromElement(element: HTMLElement): string | null {
        const href = element.getAttribute("href");
        if (href) {
            const match = href.match(/\/channels\/(\d+)/);
            if (match) return match[1];
        }

        const guildId = element.getAttribute("data-guild-id");
        if (guildId) return guildId;

        let current: HTMLElement | null = element;
        for (let i = 0; i < 5; i++) {
            current = current?.parentElement || null;
            if (!current) break;

            const id = current.getAttribute("data-guild-id");
            if (id) return id;

            const href2 = current.getAttribute("href");
            if (href2) {
                const match = href2.match(/\/channels\/(\d+)/);
                if (match) return match[1];
            }
        }

        return null;
    },

    updateGuildHighlight(element: HTMLElement) {
        const guildId = this.extractGuildIdFromElement(element);
        if (!guildId) return;

        if (this.selectedGuilds.has(guildId)) {
            element.classList.add("multi-server-leaver-selected");
        } else {
            element.classList.remove("multi-server-leaver-selected");
        }
    },

    createControlPanel() {
        const container = document.createElement("div");
        container.id = "multi-server-leaver-panel";

        const toggleBtn = document.createElement("button");
        toggleBtn.className = "msl-toggle-btn";
        toggleBtn.innerHTML = "📋 Select Mode";
        toggleBtn.title = "Toggle selection mode";

        const leaveBtn = document.createElement("button");
        leaveBtn.className = "msl-leave-btn";
        leaveBtn.innerHTML = "🚪 Leave Selected";
        leaveBtn.style.display = "none";
        (leaveBtn as any).disabled = true;

        const counter = document.createElement("div");
        counter.className = "msl-counter";
        counter.textContent = "0";

        container.appendChild(toggleBtn);
        container.appendChild(leaveBtn);
        container.appendChild(counter);

        const guildListParent = document.querySelector(
            'nav[aria-label="Servers"]'
        )?.parentElement;

        if (!guildListParent) {
            console.error("[Multi Server Leaver] Could not find guild list");
            return;
        }

        guildListParent.appendChild(container);

        const self = this;

        toggleBtn.addEventListener("click", () => {
            self.selectMode = !self.selectMode;
            toggleBtn.classList.toggle("msl-active", self.selectMode);
            leaveBtn.style.display = self.selectMode ? "flex" : "none";

            if (!self.selectMode) {
                self.selectedGuilds.clear();
                self.updateCounterDisplay();
                document
                    .querySelectorAll(".multi-server-leaver-selected")
                    .forEach((el: Element) => el.classList.remove("multi-server-leaver-selected"));
            }
        });

        leaveBtn.addEventListener("click", async () => {
            await self.leaveSelectedGuilds();
        });

        (this as any).leaveBtn = leaveBtn;
        (this as any).toggleBtn = toggleBtn;
        (this as any).counter = counter;
    },

    updateCounterDisplay() {
        const counter = (this as any).counter as HTMLElement;
        if (counter) {
            counter.textContent = this.selectedGuilds.size.toString();
        }
    },

    async leaveSelectedGuilds() {
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

        const currentUser = UserStore.getCurrentUser?.();
        const currentUserId = currentUser?.id;
        if (!currentUserId) {
            alert("Fout: Kon gebruiker niet identificeren");
            return;
        }

        const ownedGuilds: string[] = [];
        const guildsToLeave: string[] = [];

        for (const guildId of this.selectedGuilds) {
            const guild = GuildStore.getGuild(guildId);
            if (!guild) continue;

            if (guild.ownerId === currentUserId) {
                ownedGuilds.push(guild.name);
            } else {
                guildsToLeave.push(guildId);
            }
        }

        if (guildsToLeave.length === 0) {
            alert("⚠️ Je bent eigenaar van alle geselecteerde servers.");
            return;
        }

        const guildNames = guildsToLeave
            .map((id: string) => {
                const guild = GuildStore.getGuild(id);
                return guild?.name || id;
            })
            .join(", ");
        const message = `Ben je zeker dat je deze servers wilt verlaten?\n\n${guildNames}`;

        if (!confirm(message)) {
            return;
        }

        this.isLeaving = true;
        const leaveBtn = (this as any).leaveBtn as HTMLElement;
        if (leaveBtn) (leaveBtn as any).disabled = true;

        let successCount = 0;
        let failCount = 0;

        for (const guildId of guildsToLeave) {
            try {
                await RESTStore.delete(`/users/@me/guilds/${guildId}`);
                this.selectedGuilds.delete(guildId);
                successCount++;
            } catch (error) {
                console.error(`[Multi Server Leaver] Failed to leave ${guildId}:`, error);
                failCount++;
            }

            await new Promise(resolve => setTimeout(resolve, 150));
        }

        this.selectedGuilds.clear();
        this.selectMode = false;
        this.isLeaving = false;

        const toggleBtn = (this as any).toggleBtn as HTMLElement;
        if (toggleBtn) toggleBtn.classList.remove("msl-active");
        if (leaveBtn) {
            leaveBtn.style.display = "none";
            (leaveBtn as any).disabled = true;
        }

        this.updateCounterDisplay();

        document
            .querySelectorAll(".multi-server-leaver-selected")
            .forEach((el: Element) => el.classList.remove("multi-server-leaver-selected"));

        let resultMessage = `✅ Voltooid! ${successCount} server(s) verlaten`;
        if (ownedGuilds.length > 0) {
            resultMessage += `\n\n⚠️ ${ownedGuilds.length} server(s) overgeslagen (eigenaar)`;
        }
        if (failCount > 0) {
            resultMessage += `\n\n❌ ${failCount} server(s) mislukt`;
        }

        alert(resultMessage);
    },

    cleanup() {
        const panel = document.getElementById("multi-server-leaver-panel");
        if (panel) panel.remove();

        const style = document.getElementById("multi-server-leaver-styles");
        if (style) style.remove();

        const observer = (this as any).guildObserver;
        if (observer) observer.disconnect();

        document
            .querySelectorAll("[_msl-patched]")
            .forEach((el: Element) => delete (el as any)._mslPatched);
    }
});
