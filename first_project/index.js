// Basic JavaScript
function laino() {
    console.log("Hello, world!")
}

function closure() {
    var counter = 0;
    return function() {
        return counter++;
    }
}

// for (var i = 1; i < 10; i++) {
//     console.log(`Hello, ${i}`);
// }
var func = closure()

console.log(func())
console.log(func())
console.log(func())


//OOP with javaScript
Object.prototype.toString = function() {
    return "Pedal: " + this.el;
}


var newObject_1 = {}
var newObject_2 = new Object()
var newObject_3 = Object.create(Object.prototype)

Object.defineProperty(this, "someKey", {writable: true, enumerable: true, configurable: true } )

newObject_1.someKey = "mirizlivo"

console.log(newObject_1.someKey)
console.log(Object.hasOwnProperty("someKey"))