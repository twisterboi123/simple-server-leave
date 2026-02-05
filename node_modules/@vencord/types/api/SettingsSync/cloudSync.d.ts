export declare function shouldCloudSync(direction: "push" | "pull"): boolean;
export declare function putCloudSettings(manual?: boolean): Promise<void>;
export declare function getCloudSettings(shouldNotify?: boolean, force?: boolean): Promise<boolean | undefined>;
export declare function deleteCloudSettings(): Promise<void>;
export declare function eraseAllCloudData(): Promise<void>;
