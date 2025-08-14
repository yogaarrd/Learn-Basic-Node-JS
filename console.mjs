import {Console} from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");
const log = new Console({
    stdout: file,
    stderr: file
})

log.info("Hello World")
log.error("Upsss")

const person = {
    firstName : "Yoga",
    lastName : "Ardiana"
}
log.table(person)