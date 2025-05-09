import { app, BrowserWindow } from "electron";

import MainWindow from "./MainWindow";

export default class App {
    private mainWindow: MainWindow;

    constructor() {
        this.mainWindow = new MainWindow();
        this.init();
    }

    private init() {

        app.whenReady().then(() => {
            if (process.platform === 'win32') {
                app.setAppUserModelId('my-electron-app');
            }

            app.on('activate', () => {
                if (BrowserWindow.getAllWindows().length === 0) {
                    this.mainWindow = new MainWindow();
                }
            });
        });

        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });

        app.on('ready', this.mainWindow.createWindow.bind(this.mainWindow));
    }
}

