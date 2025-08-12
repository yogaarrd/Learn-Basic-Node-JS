import readline from "readline/promises"
import process from "process"

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// input.question("Siapa Nama Anda? ", (name) => {
//     console.info(`Hallo ${name}`)
//     input.close();
// })


const nama = await input.question("Siapa Nama Kamu?");
if(nama == "yoga"){
    console.log(`Hallo ${nama}, wah kamu memiliki nama yang bagus`)
    const hobi = await input.question("Apa Hobi Kamu Sih?")
    console.log(`Wow ${hobi},Wah Keren Hobi Kamu Mantap Sekali Jir, `)
}else{
    console.log(`Ahhh Sial, Coba Lagi`)
}
input.close()
