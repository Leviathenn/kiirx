/**
 * @author Leviathenn
 */

import * as fs from "fs"

export class bashrc{
    private bashrc: string;
    constructor(){
        this.bashrc = fs.readFileSync("tools/bashrc.sh").toString(); //the same as .toString i like c syntax.
    }
    export(info:{fname: string, value: string}): void{
        let filename = info["fname"];
        let value = info["value"];
    
        
    }
}