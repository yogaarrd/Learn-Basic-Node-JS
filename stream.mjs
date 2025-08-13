import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Komang\n");
writer.write("Yoga\n");
writer.write("Ardiana\n");
writer.end();

writer.on("finish", () => {
    const reader = fs.createReadStream("target.log");
    
    reader.addListener("data", function(data) {
       console.info(data.toString()) ;
    });
})
