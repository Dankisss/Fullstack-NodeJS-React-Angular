//let i;
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i),  i * 1000)
// }

class AddedNumbers {
    constructor() {
        this.numbers = []
    }

    add(number) {
        this.numbers.push(number)
    }

    get() {
        return this.numbers;
    }
}

const callbacks = [];


for (let i = 0; i < 3; i++) {
    callbacks[i] = () => i * 2;
}

console.log(callbacks[0]())
console.log(callbacks[1]())
console.log(callbacks[2]())

let a = new AddedNumbers()
a.add(5)
a.add(4)
a.add(2)
a.add(1)
a.get().forEach((a) => {
    if (a % 2 == 0)
        console.log(a)
})