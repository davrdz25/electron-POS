/// <reference types="react-scripts" />

interface Window {
    electron: {
        connectDatabase: () => Promise<void>;
        existsConfigFile: () => Promise<void>;
        setDatabaseConfig: (config: any) => Promise<void>;
        createConfigFile:(config: any) => Promise<void>;
    };
}
