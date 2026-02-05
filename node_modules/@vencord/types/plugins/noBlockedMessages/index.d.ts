import { OptionType } from "../../utils/types";
import { Message } from "@vencord/discord-types";
interface MessageDeleteProps {
    collapsedReason: () => any;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        ignoreMessages: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
        applyToIgnoredUsers: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        ignoreMessages: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
        applyToIgnoredUsers: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: false;
        };
    }>, {}>;
    patches: ({
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: (_: any, _funcName: any, props: any) => string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    })[];
    shouldIgnoreMessage(message: Message): boolean;
    shouldHide(props: MessageDeleteProps): boolean;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
