

function samplePromise(){
    return Promise.resolve("Eko");
}

async function runner(){
    const name = await samplePromise();
    return console.info(name);
}

runner()
