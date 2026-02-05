// Vencord type definitions

declare module "@vencord/types" {
    export interface Plugin {
        name: string;
        description: string;
        authors: Array<{ name: string; id?: string }>;
        version: string;
        start?(): void;
        stop?(): void;
        [key: string]: any;
    }

    export function definePlugin(plugin: Plugin): Plugin;
}

declare module "@webpack" {
    export function findByProps(...props: string[]): any;
    export function findByDisplayName(name: string): any;
    export function findByCode(...code: string[]): any;
    export function findByKeyCode(code: number): any;
    export function waitForModule(filter: (m: any) => boolean): Promise<any>;
    export function getModule(filter: (m: any) => boolean): any;
    export const common: any;
}

declare module "@patcher" {
    export function after(module: string | object, method: string, callback: Function, options?: any): void;
    export function before(module: string | object, method: string, callback: Function, options?: any): void;
    export function instead(module: string | object, method: string, callback: Function, options?: any): void;
    export function unpatchAll(): void;
}
