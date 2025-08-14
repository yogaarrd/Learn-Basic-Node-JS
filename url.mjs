import {URL} from "url"

const link = new URL("https://www.linksuply.com/produk/search?search=lamarzocco")


// Mengubah URL
link.host = "linksuply.com";
link.searchParams.append("category", "Coffee Machine")


// Membaca URL
console.info(link.toString());
console.info(link.href);
console.info(link.protocol);
console.info(link.host);
console.info(link.pathname);
console.info(link.searchParams);
