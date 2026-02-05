import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { IconComponent, OptionType } from "../../utils/types";
import { Message } from "@vencord/discord-types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        clickMethod: {
            description: string;
            type: OptionType.SELECT;
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
    }, import("../../utils/types").SettingsChecks<{
        clickMethod: {
            description: string;
            type: OptionType.SELECT;
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
    }>, {}>;
    contextMenus: {
        "guild-context": NavContextMenuPatchCallback;
        "guild-settings-role-context": NavContextMenuPatchCallback;
        "channel-context": NavContextMenuPatchCallback;
        "thread-context": NavContextMenuPatchCallback;
        "gdm-context": NavContextMenuPatchCallback;
        "user-context": NavContextMenuPatchCallback;
        "dev-context": NavContextMenuPatchCallback;
    };
    messagePopoverButton: {
        icon: IconComponent;
        render(msg: Message): {
            label: string;
            icon: IconComponent;
            message: Message;
            channel: import("@vencord/discord-types").Channel;
            onClick: () => void;
            onContextMenu: (e: any) => void;
        };
    };
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
