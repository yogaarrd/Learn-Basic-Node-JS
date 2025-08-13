const buffer = Buffer.from("Komang Yoga Ardiana", "utf-8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("S29tYW5nIFlvZ2EgQXJkaWFuYQ==", "base64");

console.info(buffer.toString("utf-8"));