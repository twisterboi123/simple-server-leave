import { HighlighterProps } from "../components/Highlighter";
import { HljsSetting } from "../types";
export declare const cl: (...args: import("../../../utils/css").ClassNameFactoryArg[]) => string;
export declare const shouldUseHljs: ({ lang, tryHljs, }: {
    lang: HighlighterProps["lang"];
    tryHljs: HljsSetting;
}) => boolean;
