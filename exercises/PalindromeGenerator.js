class PalindromeGenerator {
    constructor() {
        this.generator = {
            [Symbol.iterator]: function*() {
                let cur = 0;
                
                while(true) {
                    if (isPalindrome(cur)) {
                        yield cur;
                    }
                    cur++;
                }
                
            }
        }
    }

    getElementsUntil(number) {
        for(let elem of this.generator) {
            if (elem > 1000) {
                break;
            }
            console.log(elem)
        }
    }
}

function reverse(number) {
    let str = number.toString();
    return parseInt(str.split("").reverse().join(''));
}

function isPalindrome(number) {
    return number == reverse(number);
}

let pg = new PalindromeGenerator()
pg.getElementsUntil(1000)