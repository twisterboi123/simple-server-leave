import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        submitRule: {
            description: string;
            type: OptionType.SELECT;
            options: {
                label: string;
                value: string;
            }[];
            default: string;
        };
        sendMessageInTheMiddleOfACodeBlock: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, {}, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    shouldSubmit(event: KeyboardEvent, codeblock: boolean): boolean;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
