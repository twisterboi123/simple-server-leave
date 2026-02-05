import { OptionType } from "../../utils/types";
import { Activity } from "@vencord/discord-types";
interface TrackData {
    name: string;
    album: string;
    artist: string;
    url: string;
    imageUrl?: string;
}
declare const enum NameFormat {
    StatusName = "status-name",
    ArtistFirst = "artist-first",
    SongFirst = "song-first",
    ArtistOnly = "artist",
    SongOnly = "song",
    AlbumName = "album"
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        apiKey: {
            description: string;
            type: OptionType.STRING;
        };
        username: {
            description: string;
            type: OptionType.STRING;
        };
        shareUsername: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        clickableLinks: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        hideWithSpotify: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        hideWithActivity: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        statusName: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        statusDisplayType: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
        nameFormat: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: NameFormat;
                default: true;
            } | {
                label: string;
                value: NameFormat;
                default?: undefined;
            })[];
        };
        useListeningStatus: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        missingArt: {
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
        showLastFmLogo: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        apiKey: {
            description: string;
            type: OptionType.STRING;
        };
        username: {
            description: string;
            type: OptionType.STRING;
        };
        shareUsername: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        clickableLinks: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        hideWithSpotify: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        hideWithActivity: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        statusName: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        statusDisplayType: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
        nameFormat: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: NameFormat;
                default: true;
            } | {
                label: string;
                value: NameFormat;
                default?: undefined;
            })[];
        };
        useListeningStatus: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        missingArt: {
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
        showLastFmLogo: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }>, {}>;
    settingsAboutComponent(): import("react").JSX.Element;
    start(): void;
    stop(): void;
    fetchTrackData(): Promise<TrackData | null>;
    updatePresence(): Promise<void>;
    getLargeImage(track: TrackData): string | undefined;
    getActivity(): Promise<Activity | null>;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
