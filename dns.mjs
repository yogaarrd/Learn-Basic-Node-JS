import dns from "dns/promises";

const address = await dns.lookup("google.com")

console.info(address.address);
console.info(address.family);