class Person {

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    toString() {
        return `My name is: ${this.name} with id ${this.id}`;
    }

}

class Student extends Person{
    constructor(name ,id, fNum) {
        super(name, id);
        this.fNum = fNum;
    }

    toString () {
        return `Hi, I am student. My name is ${this.name} with facluly number ${this.fNum}.`
    }
}

let obj1 = new Person("Ivan", 1234);
let obj2 = new Student("Petar", 12356, "2MI0600025");
let arr = [];
arr.push(obj1);
arr.push(obj2);

for (obj of arr){
    console.log(obj.toString())
}

const arr_2 = []
arr_2.push(new Student("ivan", 1357, "abcd"))
arr_2.push(new Student("pesho", 2468, "efghi"))
arr_2.push(new Student("daka", 1234567, "jklmnop"))

for({name:n, fNum: f} of arr_2) {
    console.log(`Name: ${n} with f.n: ${f}`);
}
// console.log(obj1.toString());
// console.log(obj2.toString());
