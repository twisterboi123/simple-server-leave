import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    tags: string[];
    contextMenus: {
        "guild-context": NavContextMenuPatchCallback;
        "guild-header-popout": NavContextMenuPatchCallback;
    };
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
