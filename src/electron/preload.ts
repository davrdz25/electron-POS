import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  setDatabaseConfig: (config: any) => ipcRenderer.invoke('set-database-config', config),
  connectDatabase: () => ipcRenderer.invoke('connect-database'),
  existsConfigFile: () => {
    console.log("called existsConfigFile from renderer");
    return ipcRenderer.invoke('exists-config-file')
  },
  createConfigFile: (config: any) => {
    console.log("called createConfigFile from renderer");
    return ipcRenderer.invoke('create-config-file', config);
}
});
