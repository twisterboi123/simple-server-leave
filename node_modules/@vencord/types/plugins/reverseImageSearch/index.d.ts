import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    tags: string[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: (m: string, target: string) => string;
        };
    }[];
    contextMenus: {
        message: NavContextMenuPatchCallback;
        "image-context": NavContextMenuPatchCallback;
    };
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
