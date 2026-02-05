import { Plugin } from "@vencord/types";

/**
 * Guild information structure
 */
export interface Guild {
    id: string;
    name: string;
    icon: string | null;
    ownerId: string;
    afkChannelId: string | null;
    afkTimeout: number;
    description: string | null;
}

/**
 * Selected guild item
 */
export interface SelectedGuild {
    id: string;
    name: string;
    ownerId: string;
}

/**
 * Vencord GuildStore interface
 */
export interface IGuildStore {
    getGuild(id: string): Guild | undefined;
    getGuilds(): Record<string, Guild>;
}

/**
 * Vencord UserStore interface
 */
export interface IUserStore {
    getCurrentUser(): { id: string; username: string } | undefined;
}

/**
 * Vencord REST API interface
 */
export interface IRestAPI {
    delete(path: string, options?: any): Promise<any>;
    post(path: string, options?: any): Promise<any>;
    get(path: string, options?: any): Promise<any>;
    patch(path: string, options?: any): Promise<any>;
}

/**
 * Plugin configuration
 */
export interface PluginConfig {
    selectMode: boolean;
    selectedGuilds: Map<string, SelectedGuild>;
    isLeaving: boolean;
    rateLimit: number; // ms between requests
}

/**
 * Rate limiter options
 */
export interface RateLimiterOptions {
    delayMs: number;
    maxRetries: number;
}

/**
 * Confirmation dialog options
 */
export interface ConfirmationOptions {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    dangerous?: boolean; // Show warning styling
}

/**
 * Leave result
 */
export interface LeaveResult {
    successCount: number;
    failCount: number;
    ownedGuilds: SelectedGuild[];
    failedGuilds: { guild: SelectedGuild; error: string }[];
}

/**
 * Plugin state for debugging
 */
export interface PluginState {
    selectMode: boolean;
    selectedGuildsCount: number;
    isLeaving: boolean;
    selectedGuildIds: string[];
}
