/**
 * @author Leviathenn
 */

import * as xml2js from "xml2js"

export class xmlEnv{ 
    private xml: string;
    constructor(xmlSource: string){
        this.xml = xmlSource;
    }
    parse(){
        
        xml2js.parseString(this.xml, function (err, result) {
            const mainDoc = result["x"]["env"][0];
            const variables = mainDoc["variable"];
            variables.forEach((element: { name: string; contents: string;}) => {
                if(!element.contents[0].split(":$")){

                }else{
                    console.log(`Fetching Environment Variable ${element.contents[0].split(":$")[1]} From save.`)
                }
            });
           
        });
    }
}