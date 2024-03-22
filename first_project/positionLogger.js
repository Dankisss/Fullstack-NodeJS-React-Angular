function PositionLogger() {
    var position = null
    var positionsLog = []

    Object.defineProperty(this, "position", {
        get: function() {
            console.log("get method called")
            return position
        }
        ,
        set: function(val) {
            position = val;
            console.log("set method called")
            positionsLog.push({data: val})
        }
    })

    Object.defineProperty(this, "positionsLog", {
        get: function() {
            return positionsLog
        }
    })

    //this.getLog = function() {return positionsLog}
}

var obj = new PositionLogger()
obj.position = 5
console.log(obj.position)

console.log(obj.getLog())

var obj_2 = new PositionLogger()
obj_2.position = 4

// obj_2.getLog = function () {
//     return obj.getLog.call(this) 
// }
//obj_2.getLog()
console.log(obj_2.position)
console.log(obj_2.positionsLog)


// var object1, object2;
// object1 = {num: 42}
// object2 = object1
// object2.num = 51
// console.log(object1.num)