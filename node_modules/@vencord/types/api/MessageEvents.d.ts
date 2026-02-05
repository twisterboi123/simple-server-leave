import type { Channel, CloudUpload, CustomEmoji, Message } from "@vencord/discord-types";
import type { Promisable } from "type-fest";
export interface MessageObject {
    content: string;
    validNonShortcutEmojis: CustomEmoji[];
    invalidEmojis: any[];
    tts: boolean;
}
export interface MessageReplyOptions {
    messageReference: Message["messageReference"];
    allowedMentions?: {
        parse: Array<string>;
        repliedUser: boolean;
    };
}
export interface MessageOptions {
    stickers?: string[];
    uploads?: CloudUpload[];
    replyOptions: MessageReplyOptions;
    content: string;
    channel: Channel;
    type?: any;
    openWarningPopout: (props: any) => any;
}
export type MessageSendListener = (channelId: string, messageObj: MessageObject, options: MessageOptions) => Promisable<void | {
    cancel: boolean;
}>;
export type MessageEditListener = (channelId: string, messageId: string, messageObj: MessageObject) => Promisable<void | {
    cancel: boolean;
}>;
export declare function _handlePreSend(channelId: string, messageObj: MessageObject, options: MessageOptions, replyOptions: MessageReplyOptions): Promise<boolean>;
export declare function _handlePreEdit(channelId: string, messageId: string, messageObj: MessageObject): Promise<boolean>;
/**
 * Note: This event fires off before a message is sent, allowing you to edit the message.
 */
export declare function addMessagePreSendListener(listener: MessageSendListener): MessageSendListener;
/**
 * Note: This event fires off before a message's edit is applied, allowing you to further edit the message.
 */
export declare function addMessagePreEditListener(listener: MessageEditListener): MessageEditListener;
export declare function removeMessagePreSendListener(listener: MessageSendListener): boolean;
export declare function removeMessagePreEditListener(listener: MessageEditListener): boolean;
export type MessageClickListener = (message: Message, channel: Channel, event: MouseEvent) => void;
export declare function _handleClick(message: Message, channel: Channel, event: MouseEvent): void;
export declare function addMessageClickListener(listener: MessageClickListener): MessageClickListener;
export declare function removeMessageClickListener(listener: MessageClickListener): boolean;
