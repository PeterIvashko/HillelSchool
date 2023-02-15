let myArray = [1, 2, 3, 4, 5, 6, 7, 8]

function removeElement(array, item) {
    let i = array.indexOf(item)
    return array.splice(i, 1);
}

removeElement(myArray, 1)

console.log(myArray)


let array2 = [18, 'array', true, 68, 'hillel', 92] 
let output;

function getArithmeticAverage(array) {
    let num = 0
    let x = 0
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            num = num + array[i]
            x = x + 1
        }
    }
    output = num / x
    return output
}

console.log(getArithmeticAverage(array2))

let arr = ['l', 'd']
let str = 'hello world'

function getReplace() {
    arr.forEach(item => {
        re = new RegExp(item, 'g')
        str = str.replace(re, '')
    });
}

console.log(str)