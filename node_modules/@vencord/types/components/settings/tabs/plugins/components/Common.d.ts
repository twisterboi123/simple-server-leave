import { DefinedSettings, PluginOptionBase } from "../../../../../utils/types";
import { PropsWithChildren } from "react";
export declare const cl: (...args: import("../../../../../utils/css").ClassNameFactoryArg[]) => string;
interface SettingBaseProps<T> {
    option: T;
    onChange(newValue: any): void;
    pluginSettings: {
        [setting: string]: any;
        enabled: boolean;
    };
    id: string;
    definedSettings?: DefinedSettings;
}
export type SettingProps<T extends PluginOptionBase> = SettingBaseProps<T>;
export type ComponentSettingProps<T extends Omit<PluginOptionBase, "description" | "placeholder">> = SettingBaseProps<T>;
export declare function resolveError(isValidResult: boolean | string): string | null;
interface SettingsSectionProps extends PropsWithChildren {
    name: string;
    description: string;
    error?: string | null;
    inlineSetting?: boolean;
    tag?: "label" | "div";
}
export declare function SettingsSection({ tag: Tag, name, description, error, inlineSetting, children }: SettingsSectionProps): import("react").JSX.Element;
export {};
