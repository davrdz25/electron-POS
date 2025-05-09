import { TSQLConfig } from "../Types/index";
import fs from "fs"

import path from "path";

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

    
      public Load(): TSQLConfig | null {
        if (!fs.existsSync(this.configPath)) return null;
    
        const data = JSON.parse(fs.readFileSync(this.configPath, 'utf-8'));
    
        return {
          ServerName: data.server,
          UserName: data.user,
          Password: data.password,
        };
      }
    
      public Exists(): boolean {
        return fs.existsSync(this.configPath);
      }
}
