/**
 * @author Leviathenn
 */
import * as fs from "fs";
import { argv } from "bun";
import { Info } from "./lib/Info";
import { xmlEnv } from "./lib/xmlEnv";

if(argv.length <= 2){

    const MainParser = new Info("storageDevice","none");
    MainParser.parse();
    const envParser = new xmlEnv(fs.readFileSync("storageDevice/env.xml").toString());
    envParser.parse();
}else{
   
}

