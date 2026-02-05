import { OptionType, ReporterTestable } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    reporterTestable: ReporterTestable;
    settings: import("../../utils/types").DefinedSettings<{
        notifyOnAutoConnect: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        notifyOnAutoConnect: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }>, {}>;
    toolboxActions: {
        Reconnect(): void;
    };
    start(): void;
    stop(): void;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
