import { OptionType } from "../../utils/types";
declare const enum IndicatorType {
    SERVER = 1,
    FRIEND = 2,
    BOTH = 3
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    options: {
        mode: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: IndicatorType;
                default: true;
            } | {
                label: string;
                value: IndicatorType;
                default?: undefined;
            })[];
        };
    };
    renderIndicator: () => import("react").JSX.Element;
    start(): void;
    stop(): void;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
