/**
 * Renders code in a Discord codeblock
 */
export declare function CodeBlock(props: {
    content?: string;
    lang: string;
}): import("react").JSX.Element;
/**
 * Renders inline code like `this`
 */
export declare function InlineCode({ children }: {
    children: React.ReactNode;
}): import("react").JSX.Element;
