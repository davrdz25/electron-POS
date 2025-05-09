import { BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import Database from '../Utilities/Database';
import DatabaseConfig from '../Utilities/DatabaseConfig'

import { config as SQLConfig } from 'mssql';
import Encryption from '../Utilities/Encryption';
import { TSQLConfig } from '../Types/index';

export default class MainWindow {
    private win: BrowserWindow | null = null;

    public createWindow() {
        const databaseConfig = new DatabaseConfig()

        require('dotenv').config();

        console.log(process.env.NODE_ENV);

        ipcMain.handle('set-database-config', (_event, config) => {
            const sqlConfig: SQLConfig = {
                server: config.ServerName,
                user: config.Username,
                password: config.Password,
                options: {
                    trustServerCertificate: true
                }
                
            }
            Database.configure(sqlConfig);
        });

        ipcMain.handle('connect-database', async () => {
            try {
                const pool = await Database.Connect();
                return { success: true, message: 'Conexión exitosa' };
            } catch (err) {
                return { success: false, message: (err as Error).message };
            }
        });

        ipcMain.handle('exists-config-file', async () => {
            try {
                return databaseConfig.Exists();
            } catch (err) {
                return false;
            }
        });

        ipcMain.handle('create-config-file', async (_event, config) => {
            try {
                console.log("conf electron", config)

                const dbConf: TSQLConfig = {
                    ServerName: Encryption.encrypt(config.ServerName),
                    UserName: Encryption.encrypt(config.UserName),
                    Password: Encryption.encrypt(config.Password),
                    DatabaseName: Encryption.encrypt("POS")
                }

                console.log("conf electron", dbConf)
                databaseConfig.Save(dbConf)

                return true;
                
            } catch (err) {
                console.error("Error al guardar config:", err);
                return false;
            }
        });

        // Crear la ventana del navegador
        this.win = new BrowserWindow({
            width: 1920,
            height: 1080,
            webPreferences: {
                preload: path.join(__dirname, '../preload.js'), // si usas un archivo preload
                contextIsolation: true,
                nodeIntegration: false,
            }
        });

        // Cargar el archivo HTML
        if (process.env.NODE_ENV === 'development') {
            this.win.loadURL('http://localhost:3000');
        } else {
            console.log("__dirname",__dirname);
            this.win.loadFile(path.join(__dirname, '../../renderer/index.html'));
        }        

        // Abrir las herramientas de desarrollo en modo de depuración
        if (process.env.NODE_ENV === 'development') {
            this.win.webContents.openDevTools();
        }

        // Cerrar la ventana cuando se cierre
        this.win.on('closed', () => {
            this.win = null;
        });
    }
}