export {};

declare global {
  interface Window {
    electron: {
      setDatabaseConfig: (config: any) => Promise<void>;
      connectDatabase: () => Promise<{ success: boolean; message: string }>;
      existsConfigFile: () => Promise<boolean>;
      createConfigFile: (config: any) => Promise<boolean>;
    };
  }
}