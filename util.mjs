import util from "util";

// const firstName = "yoga"
// const lastName = "ardiana"

// console.log(`Hello ${firstName} ${lastName}`)
// console.log(util.format("Hello %s %s", firstName, lastName))

const person = {
    firstName: "Yoga",
    lastName: "Ardiana"
}

console.log(`Hello ${JSON.stringify(person)}`);
console.log(util.format("hello %j", person))