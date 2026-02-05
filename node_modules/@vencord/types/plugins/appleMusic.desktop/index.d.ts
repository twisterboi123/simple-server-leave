import { OptionType, ReporterTestable } from "../../utils/types";
import { Activity } from "@vencord/discord-types";
import { ActivityType } from "@vencord/discord-types/enums";
export interface TrackData {
    name: string;
    album?: string;
    artist?: string;
    appleMusicLink?: string;
    songLink?: string;
    albumArtwork?: string;
    artistArtwork?: string;
    playerPosition?: number;
    duration?: number;
}
declare const enum AssetImageType {
    Album = "Album",
    Artist = "Artist",
    Disabled = "Disabled"
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    hidden: boolean;
    reporterTestable: ReporterTestable;
    settingsAboutComponent(): import("react").JSX.Element;
    settings: import("../../utils/types").DefinedSettings<{
        activityType: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: ActivityType;
                default: true;
            } | {
                label: string;
                value: ActivityType;
                default?: undefined;
            })[];
        };
        statusDisplayType: {
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
        refreshInterval: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
            restartNeeded: true;
        };
        enableTimestamps: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        enableButtons: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        nameString: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        detailsString: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        stateString: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        largeImageType: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: AssetImageType;
                default: true;
            } | {
                label: string;
                value: AssetImageType;
                default?: undefined;
            })[];
        };
        largeTextString: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        smallImageType: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: AssetImageType;
                default?: undefined;
            } | {
                label: string;
                value: AssetImageType;
                default: true;
            })[];
        };
        smallTextString: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        activityType: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: ActivityType;
                default: true;
            } | {
                label: string;
                value: ActivityType;
                default?: undefined;
            })[];
        };
        statusDisplayType: {
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
        refreshInterval: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
            restartNeeded: true;
        };
        enableTimestamps: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        enableButtons: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        nameString: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        detailsString: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        stateString: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        largeImageType: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: AssetImageType;
                default: true;
            } | {
                label: string;
                value: AssetImageType;
                default?: undefined;
            })[];
        };
        largeTextString: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        smallImageType: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: AssetImageType;
                default?: undefined;
            } | {
                label: string;
                value: AssetImageType;
                default: true;
            })[];
        };
        smallTextString: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
    }>, {}>;
    start(): void;
    stop(): void;
    updatePresence(): void;
    getActivity(): Promise<Activity | null>;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
