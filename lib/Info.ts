/**
 * @author Leviathenn
 */
import * as fs from "fs";
import * as CryptoJS from 'crypto-js';
import * as xml2js from 'xml2js';
export class Info {
    private cryptoAES: typeof CryptoJS.AES;
    private fileName: string;
    private keyModes: any;
    constructor(private storageLocation: string, private AESKEY: string) {
        this.cryptoAES = CryptoJS.AES;
        this.fileName = storageLocation;
        this.keyModes = {};
    }

    encrypt(data: string, key: string = ""): string {
        let encrypted: string = "";
        if(key == ""){
            encrypted = this.cryptoAES.encrypt(data, this.AESKEY).toString();
        }else{
            encrypted = this.cryptoAES.encrypt(data, key).toString();
        }
       
        return encrypted.toString();
    }

    decrypt(ciphertext: string): string {
        const decrypted = this.cryptoAES.decrypt(ciphertext, this.AESKEY);
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    saveToFile(data: string): void {
        const encryptedData = this.encrypt(data);
        fs.writeFileSync(this.storageLocation, encryptedData);
    }

    parse(): any{
        let encrData = fs.readFileSync(`${this.fileName}/info.xml`).toString();
        let splitData = encrData.split("");
        let returnData:any = {};

            
               
            
           
                let keyModes = this.keyModes;
                //console.log(actSplit)
                //console.log(this.decrypt(actSplit1))
                xml2js.parseString(encrData, function (err, result) {
                
                    
                  });

          
                  return {
            
                  };
        
    }
    
    encryptF(): void{
        let encrData = fs.readFileSync(this.fileName).toString();
        let splitData = encrData.split("");
        let splitsD = encrData.split("\n");
        let splitdt = encrData.split("\n")[0];
        //console.log(encrData)
        let actionIdentifer = splitdt.split("$@")[1].split("$")[0];
        let actSplit = encrData.split(`$%${actionIdentifer}$`)[0].split(`$@${actionIdentifer}$`)[1].replace("\n","");
        let fixedAct = this.encrypt(actSplit);
        fs.writeFileSync(this.fileName+'-device',`$@${actionIdentifer}$
${fixedAct}
$%${actionIdentifer}$`
            );
            console.log("Done!")
    }
    createKey(accesses: any,keight: any): string{
        return this.encrypt(`ACCESS_KEY::${this.encrypt(JSON.stringify({"accesses": accesses}),keight)}`,keight);
        
    }
    tester(): void {
        
    }
}