const buffer = Buffer.from("Yoga Ardiana");

console.info(buffer);
{/* <Buffer 59 6f 67 61 20 41 72 64 69 61 6e 61> */}

console.info(buffer.toString());
// Yoga Ardiana

console.info(buffer.toJSON());
// {
//   type: 'Buffer',
//   data: [
//      89, 111, 103,  97, 32,
//      65, 114, 100, 105, 97,
//     110,  97
//   ]
// }

buffer.reverse()

console.info(buffer.toString())
// anaidrA agoY