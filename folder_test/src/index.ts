import Renthub from "@ellumina/renthub-btfs";
import path from "path";
import fs from "fs";

const instance = new Renthub('Your-api-key-here-😉');

const stream = fs.createReadStream(path.join( __dirname, "../test.png"));

instance.dev.pinFile(stream).then((res: any) => {console.log(res)}).catch((err)=>{console.error(err)});
instance.rental.pinFile(stream, 40).then((res: any) => {console.log(res)}).catch((err)=>{console.error(err)});
