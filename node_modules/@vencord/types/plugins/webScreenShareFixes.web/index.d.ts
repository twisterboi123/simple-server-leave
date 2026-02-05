import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    enabledByDefault: true;
    settings: import("../../utils/types").DefinedSettings<{
        experimentalAV1Support: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        experimentalAV1Support: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: ({
            match: RegExp;
            replace: string;
        } | {
            match: string;
            replace: string;
        })[];
    }[];
    getCodecs(Codecs: Record<string, string>): string[];
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
