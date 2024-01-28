/**
 * @author Leviathenn
 */

import * as fs from "fs"

export class bashrc{
    private bashrc: string;
    private rcpath: string;
    constructor(exportPath: string){
        this.bashrc = fs.readFileSync("tools/bashrc.sh").toString(); 
        this.rcpath = exportPath;
    }
    export(info:{fname: string, value: string, path: boolean}): void{
        let value = info["value"];
        if(info["path"]){   
            this.bashrc += `\nexport PATH=$PATH:${value}`
        }else{
            let filename = info["fname"];
            this.bashrc += `\nexport ${filename}=${value}`
        }
        fs.writeFileSync(`${this.rcpath}/.bashrc`,this.bashrc);
        
    }
    alias(info:{command: string, alias: string}):void{
        this.bashrc += `\nalias ${info["command"]}=${info["alias"]}`;
        fs.writeFileSync(`${this.rcpath}/.bashrc`, this.bashrc);
    }
    execute(info:{command: string, arguments: string[]}):void{
        let finishargs: string;
        if(info["arguments"].length == 0){
            this.bashrc += `${info["command"]}`
        fs.writeFileSync(`${this.rcpath}/.bashrc`,this.bashrc);
        }else{
          info["arguments"].forEach((element: string) => {
            finishargs += `${element} `;
          });  
          this.bashrc += `${info["command"]} ${info["arguments"]}`;
          fs.writeFileSync(`${this.rcpath}/.bashrc`,this.bashrc);
        }
    }
}