import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        statusToSet: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
    }, import("../../utils/types").SettingsChecks<{
        statusToSet: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
    }>, {}>;
    flux: {
        RUNNING_GAMES_CHANGE({ games }: any): void;
    };
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
