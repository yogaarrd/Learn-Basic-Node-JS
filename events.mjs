import {EventEmitter} from "events";

const emmiter = new EventEmitter();

emmiter.addListener("hello", (name) => {
    console.log(`Hai, ${name}`)
})

emmiter.emit("hello", "Yoga")
emmiter.emit("hello", "Yoga")