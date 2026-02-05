import "./PluginModal.css";
import { ModalProps } from "../../../../utils/modal";
import { Plugin } from "../../../../utils/types";
interface PluginModalProps extends ModalProps {
    plugin: Plugin;
    onRestartNeeded(key: string): void;
}
export default function PluginModal({ plugin, onRestartNeeded, onClose, transitionState }: PluginModalProps): import("react").JSX.Element;
export declare function openPluginModal(plugin: Plugin, onRestartNeeded?: (pluginName: string, key: string) => void): void;
export {};
