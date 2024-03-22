function Employee(name, expericnceInYears, qualifications) {
    this._name = name
    this._expericnceInYears = expericnceInYears
    this._qualifications = qualifications
}

Employee.prototype.toString = function () {
    return "Name: " + this._name + " Experince: " + this._expericnceInYears
    +" Qualifications: " + this._qualifications
}

var obj_1 = new Employee("Ivan", 14, ["JS", "C++", "FMI"])
console.log(obj_1.toString())

var obj_2 = new Employee("Petar", 7, ["react", "C++", "HTML"])
console.log(obj_2.toString())

function isEven(num) { return num % 2 == 0}
function isOdd(num) { return num % 2 != 0}
function str(el) {return ++el}
function print(el) {console.log(el);}
function sum(prev, next) {return prev + next;}

console.log([2,4,6,8,12,14,16].every(isEven))
console.log([1,2,4,6,8,10].some(isOdd))
console.log([1,2,4,6,8,10].filter(isOdd))
console.log([1,2,3,4,5,6].map(n => str(n)))
var res = [1,2,3,4]
res.filter(isOdd).map(str).forEach(print)

var sum_result = [1,2,3,4,5,6].filter(isEven).map(str).reduce(sum, 0)
console.log(sum_result)
