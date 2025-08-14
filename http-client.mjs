import https from "https";

const endpoint = "https://webhook.site/bc599a44-0a41-4aad-8533-bdd03fb3186bsdsd"
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "content-type" : "application/json",
        "accept" : "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Rechive data: ${data.toString()}`);
    })
})

const body = JSON.stringify({
    firstName: "Yoga",
    lastName: "Ardiana"
})

request.write(body);
request.end();