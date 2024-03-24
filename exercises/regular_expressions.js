const rp = new RegExp("abc")
console.log(rp.test("abc"))
console.log("The latest airplane designs evolved from slabcraft.".match(rp))

//beggining and end of regex ($ ^)

const rp_2 = new RegExp("t$")
const rp_3 = new RegExp("^a");

console.log(rp_2.test("eater"));
console.log(rp_2.test("eat"));

console.log(rp_3.test("apple"));
console.log(rp_3.test("pineapple"));

//word boundaries
const rp_4 = /\boon/; 
const rp_5 = /\Boon/;

console.log(rp_4.test("moon"));
console.log(rp_5.test("moon"));

//x(?=y), x(?!y), (?<y)x, (?<!y)x
const rp_6 = /Yordan (?=Radanov)/
console.log(rp_6.test("Yordan Radanov"));
console.log(rp_6.test("Yordan Petkov"));

const rp_7 = /Yordan (?!Radanov)/
console.log(rp_7.test("Yordan Radanov"));
console.log(rp_7.test("Yordan Petkov"));

const rp_8 = /(?<=Monika) Peneva/
console.log(rp_8.test("Monika Peneva"))
console.log(rp_8.test("Monika Nedjalkova"))

const rp_9 = /(?<!Monika) Peneva/
console.log(rp_9.test("Monika Peneva"))
console.log(rp_9.test("Penka Peneva"))


