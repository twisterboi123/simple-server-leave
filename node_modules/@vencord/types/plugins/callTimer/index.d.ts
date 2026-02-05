import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    managedStyle: string;
    startTime: number;
    interval: NodeJS.Timeout | undefined;
    options: {
        format: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
    };
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    renderTimer(channelId: string): import("react").JSX.Element;
    Timer({ channelId }: {
        channelId: string;
    }): import("react").JSX.Element;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
