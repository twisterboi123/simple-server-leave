import { OptionType, StartAt } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    required: true;
    settings: import("../../utils/types").DefinedSettings<{
        disableAnalytics: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        disableAnalytics: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
    }>, {}>;
    patches: ({
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        };
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
    })[];
    flux: {
        TRACK(event: any): void;
    };
    startAt: StartAt.Init;
    start(): void;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
