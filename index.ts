import { argv } from "bun";
import { Storage } from "./lib/storage";

if(argv.length <= 2){

    const StorageTest = new Storage("storageDevice","none");
    StorageTest.parse();
}else{
    if(argv[2] == "--encrypt"){
        const StorageTest = new Storage("storageDevice","none");
        StorageTest.encryptF();
    }
    if(argv[2] == "--encryptRun"){
        const StorageTest = new Storage("storageDevice","none");
        StorageTest.encryptF();
        StorageTest.parse();
    }
}

