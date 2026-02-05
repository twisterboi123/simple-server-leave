import "./styles.css";
import { OptionType } from "../../utils/types";
import type { PropsWithChildren } from "react";
export declare const settings: import("../../utils/types").DefinedSettings<{
    showPluginMenu: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
    };
}, import("../../utils/types").SettingsChecks<{
    showPluginMenu: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
    };
}>, {}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        showPluginMenu: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        showPluginMenu: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    TrailingWrapper({ children, className }: PropsWithChildren<{
        className: string;
    }>): import("react").JSX.Element;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
