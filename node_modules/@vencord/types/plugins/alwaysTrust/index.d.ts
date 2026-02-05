import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        domain: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        file: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        domain: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        file: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
    }>, {}>;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
