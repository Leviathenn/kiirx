/**
 * @author Leviathenn
 */

import type { IParserOptions } from './Interfaces/ParserOptions';

import * as xml2js from 'xml2js';


export class parser{
    private filepath: string
    constructor(path: string){
        this.filepath = path;
    }
    parse(options: IParserOptions):void{
        log: (data: any)=>{return data};
        if(options.portOut){
            log: (data: any)=>{
                console.log(data);
            }
        }else{

        }

    }
}