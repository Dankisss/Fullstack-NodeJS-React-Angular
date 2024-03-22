class PalindromeGenerator {
    constructor() {
        this.generator = {
            [Symbol.iterator]() {
                let cur = 0;
                return {
                    next() {
                        do {
                            cur++;
                        }while(!isPalindrome(cur))

                        return {done: false, value: cur}
                    }
                    
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