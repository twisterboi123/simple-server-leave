import { ApplicationCommandInputType } from "../../api/Commands";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    commands: {
        name: string;
        description: string;
        inputType: ApplicationCommandInputType.BUILT_IN;
        execute: (args: import("@vencord/discord-types").CommandArgument[], ctx: import("@vencord/discord-types").CommandContext) => Promise<void>;
    }[];
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
