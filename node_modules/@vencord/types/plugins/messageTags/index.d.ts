import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
import { OptionType } from "../../utils/types";
interface Tag {
    name: string;
    message: string;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        clyde: {
            name: string;
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        tagsList: {
            type: OptionType.CUSTOM;
            default: Record<string, Tag>;
        };
    }, import("../../utils/types").SettingsChecks<{
        clyde: {
            name: string;
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        tagsList: {
            type: OptionType.CUSTOM;
            default: Record<string, Tag>;
        };
    }>, {}>;
    start(): Promise<void>;
    commands: {
        name: string;
        description: string;
        inputType: ApplicationCommandInputType.BUILT_IN;
        options: {
            name: string;
            description: string;
            type: ApplicationCommandOptionType.SUB_COMMAND;
            options: {
                name: string;
                description: string;
                type: ApplicationCommandOptionType.STRING;
                required: true;
            }[];
        }[];
        execute(args: import("@vencord/discord-types").CommandArgument[], ctx: import("@vencord/discord-types").CommandContext): Promise<import("@vencord/discord-types").Message | undefined>;
    }[];
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
