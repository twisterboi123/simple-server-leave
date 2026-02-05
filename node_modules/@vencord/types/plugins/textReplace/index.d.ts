import { OptionType } from "../../utils/types";
type Rule = Record<"find" | "replace" | "onlyIfIncludes", string>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        replace: {
            type: OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        stringRules: {
            type: OptionType.CUSTOM;
            default: Rule[];
        };
        regexRules: {
            type: OptionType.CUSTOM;
            default: Rule[];
        };
    }, import("../../utils/types").SettingsChecks<{
        replace: {
            type: OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        stringRules: {
            type: OptionType.CUSTOM;
            default: Rule[];
        };
        regexRules: {
            type: OptionType.CUSTOM;
            default: Rule[];
        };
    }>, {}>;
    onBeforeMessageSend(channelId: string, msg: import("../../api/MessageEvents").MessageObject): void;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
