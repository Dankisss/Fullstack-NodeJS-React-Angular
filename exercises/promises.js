let p = new Promise((resolve, reject) => {
    let a = Math.random()
    console.log(a)
    if (a > 0.5) {
    resolve("Az")
    }else {
        reject("Ti")
    }
})

p.then((message) => {
    console.log(`This is in the resolve ${message}`)
}).catch((message) => {
    console.log(`This is in the reject ${message}`)
}).finally(() => console.log("Finally always executes"))

let [a,,b] = [1,2,43]
console.log(a);
console.log(b);

// function foo({name: n}) {
//     console.log(n);
// }

// foo({name: "Ivan"});

var [g] = []

console.log(g === undefined)
