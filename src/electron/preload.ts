import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  connectDatabase: () => ipcRenderer.invoke('connect-database'),
  existsConfigFile: () => ipcRenderer.invoke('exists-config-file'),
  createConfigFile: (config: any) => ipcRenderer.invoke('create-config-file', config),
  testConnection: (config: any) => ipcRenderer.invoke('test-connection',config),
});
