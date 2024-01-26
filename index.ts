import { argv } from "bun";
import { Storage } from "./lib/storage";

if(argv.length <= 2){

    const StorageTest = new Storage("storageDesign-device","none");
    StorageTest.parse();
}else{
    if(argv[2] == "--encrypt"){
        const StorageTest = new Storage("storageDesign","none");
        StorageTest.encryptF();
    }
    if(argv[2] == "--encryptRun"){
        const StorageTest = new Storage("storageDesign","none");
        StorageTest.encryptF();
        const StorageTest2 = new Storage("storageDesign-device","none");
        StorageTest2.parse();
    }else if(argv[2] == "--createKey"){
        
    }
}

