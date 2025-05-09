/// <reference types="react-scripts" />

interface Window {
    electron: {
        connectDatabase: () => Promise<void>;
        existsConfigFile: () => Promise<void>;
        createConfigFile:(config: any) => Promise<void>;
        testConnection:(config: any) => Promise<boolean>;
    };
}
