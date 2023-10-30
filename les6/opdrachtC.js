let stuff = ['c',5645,9393.77,"hello", true, false, "Good morning",88, -90, 777.777, 90,665.33,"F"]

let strings = []
let numbers = []
let booleans = []

for (let i = 0; i < stuff.length; i++) {
    const element = stuff[i];
    if (typeof(element) == "boolean") {
        booleans.push(element)
    }
    else if(typeof(element) == "string"){
        strings.push(element)
    }
    else if(typeof(element) == "number"){
        numbers.push(element)
    }
}

console.log(strings)
console.log(numbers)
console.log(booleans)