let p = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a > 0.5) {
    resolve("Az")
    }else {
        reject("Ti")
    }
})

p().then((message) => {
    console.log(`This is in the resolve ${message}`)
}).catch((message) => {
    console.log(`This is in the reject ${message}`)
})