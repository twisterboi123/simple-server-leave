import { OptionType } from "../../utils/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    changeDecoration: {
        type: OptionType.COMPONENT;
        component(): import("react").JSX.Element;
    };
    agreedToGuidelines: {
        type: OptionType.BOOLEAN;
        description: string;
        hidden: true;
        default: false;
    };
}, import("../../utils/types").SettingsChecks<{
    changeDecoration: {
        type: OptionType.COMPONENT;
        component(): import("react").JSX.Element;
    };
    agreedToGuidelines: {
        type: OptionType.BOOLEAN;
        description: string;
        hidden: true;
        default: false;
    };
}>, {}>;
