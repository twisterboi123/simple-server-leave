import { OptionType } from "../../utils/types";
import { CloudUpload } from "@vencord/discord-types";
declare const enum Methods {
    Random = 0,
    Consistent = 1,
    Timestamp = 2
}
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        anonymiseByDefault: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        method: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: Methods;
                default: true;
            } | {
                label: string;
                value: Methods;
                default?: undefined;
            })[];
        };
        randomisedLength: {
            description: string;
            type: OptionType.NUMBER;
            default: number;
            disabled: () => boolean;
        };
        consistent: {
            description: string;
            type: OptionType.STRING;
            default: string;
            disabled: () => boolean;
        };
    }, import("../../utils/types").SettingsChecks<{
        anonymiseByDefault: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        method: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: Methods;
                default: true;
            } | {
                label: string;
                value: Methods;
                default?: undefined;
            })[];
        };
        randomisedLength: {
            description: string;
            type: OptionType.NUMBER;
            default: number;
            disabled: () => boolean;
        };
        consistent: {
            description: string;
            type: OptionType.STRING;
            default: string;
            disabled: () => boolean;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    AnonymiseUploadButton: import("react").FunctionComponent<{
        upload: CloudUpload;
    }>;
    anonymise(upload: CloudUpload): void;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
