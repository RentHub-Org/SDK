"use strict";
// const  Renthub = require("./dist/lib/es5/index.js").default;
// const fs = require("fs");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const instance = new Renthub('71682083-46ef-4afc-81fa-5b8f776ada0e');
// const stream = fs.createReadStream("P:\\TBD\\testing\\sdk\\test.png");
// // instance.dev.pinFile(stream).then((data)=>{console.log("data:",data);});
// // instance.dev.pinJson({"hello":"world"}).then((data)=>{console.log("data:",data);});
// // instance.dev.getJson("QmNrEidQrAbxx3FzxNt9E6qjEDZrtvzxUVh47BXm55Zuen").then((data)=>{console.log("json data :",data);});
const renthub_btfs_1 = __importDefault(require("@ellumina/renthub-btfs"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const instance = new renthub_btfs_1.default('71682083-46ef-4afc-81fa-5b8f776ada0e');
const stream = fs_1.default.createReadStream(path_1.default.join(__dirname, "../test.png"));
// instance.dev.pinFile(stream).then((res: any) => {console.log(res)}).catch((err)=>{console.error(err)});
instance.rental.pinFile(stream, 40).then((res) => { console.log(res); }).catch((err) => { console.error(err); });
