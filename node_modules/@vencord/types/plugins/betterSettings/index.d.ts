import { buildPluginMenuEntries, buildThemeMenuEntries } from "../vencordToolbox/menu";
import { OptionType } from "../../utils/types";
import type { HTMLAttributes, ReactElement } from "react";
type SettingsEntry = {
    section: string;
    label: string;
};
interface TransformedSettingsEntry {
    section: string;
    items: SettingsEntry[];
}
interface LayerProps extends HTMLAttributes<HTMLDivElement> {
    mode: "SHOWN" | "HIDDEN";
    baseLayer?: boolean;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        disableFade: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        organizeMenu: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        eagerLoad: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        disableFade: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        organizeMenu: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        eagerLoad: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
    }>, {}>;
    start(): void;
    stop(): void;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate: () => boolean;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
    } | {
        find: string;
        replacement: ({
            match: RegExp;
            replace: string;
            predicate: () => boolean;
        } | {
            match: RegExp;
            replace: string;
            predicate?: undefined;
        })[];
        predicate?: undefined;
    })[];
    buildPluginMenuEntries: typeof buildPluginMenuEntries;
    buildThemeMenuEntries: typeof buildThemeMenuEntries;
    Layer(props: LayerProps): string | number | bigint | boolean | Iterable<import("react").ReactNode> | Promise<string | number | bigint | boolean | ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").ReactPortal | Iterable<import("react").ReactNode> | null | undefined> | import("react").JSX.Element | null | undefined;
    transformSettingsEntries(list: SettingsEntry[], keyMap: Map<string, string>): TransformedSettingsEntry[];
    wrapMap(toWrap: TransformedSettingsEntry[]): TransformedSettingsEntry[];
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
