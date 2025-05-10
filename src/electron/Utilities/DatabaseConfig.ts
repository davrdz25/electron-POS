import { TSQLConfig } from "../Types/index";
import fs from "fs"

import path from "path";
import Encryption from "./Encryption";

export default class DatabaseConfig {

  private configPath = path.join(process.cwd(), 'Config', 'Connection.json');

    public Save(config: TSQLConfig): void {
        console.log(process.cwd())
        const dir = path.dirname(this.configPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const jsonData = JSON.stringify(config, null, 4);
        fs.writeFileSync(this.configPath, jsonData, 'utf-8');
    }

      public Load(): TSQLConfig {
        const data = JSON.parse(fs.readFileSync(this.configPath, 'utf-8'));
    
        console.log('Load json config file', data)
        console.log('Load json config file', Encryption.decrypt(data.ServerName), Encryption.decrypt(data.UserName), Encryption.decrypt(data.Password))

        return {
          ServerName: Encryption.decrypt(data.ServerName),
          UserName: Encryption.decrypt(data.UserName),
          Password: Encryption.decrypt(data.Password),
        };
      }
    
      public Exists(): boolean {
        return fs.existsSync(this.configPath);
      }
}
