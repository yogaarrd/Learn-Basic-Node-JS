import timers from "timers/promises"

// const name = await timers.setTimeout(5000, "eko")

// console.info(name)


for await (const startTime of timers.setInterval(1000, "null")){
    console.info(`Start Time At ${new Date()}`)
}