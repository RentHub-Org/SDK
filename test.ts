const  Flux = require("./dist/lib/es5/index.js").default;
const fs = require("fs");

const instance = new Flux('1c9b4eb9-d47f-44ef-b78e-556695818732');
const stream = fs.createReadStream("P:\\TBD\\testing\\sdk\\test.png");

// instance.dev.pinFile(stream).then((data)=>{console.log("data:",data);});

// instance.dev.pinJson({"hello":"world"}).then((data)=>{console.log("data:",data);});

instance.dev.getJson("QmNrEidQrAbxx3FzxNt9E6qjEDZrtvzxUVh47BXm55Zuen").then((data)=>{console.log("json data :",data);});