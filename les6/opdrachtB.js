let array = ["string", 10, true, "robal", 69]
console.log("originele array", array)
console.log("array length", array.length)

let popped = array.pop()
console.log("array na pop", array)

array.push(popped)
console.log("array na push", array)

console.log(`array na ToString() gebruiken "${array}"`)

let shifted = array.shift()
console.log("array na shift", array)

array.unshift(shifted)
console.log("array na unshift", array)

array[1] = 20
console.log("array na het 2de element veranderen naar 20", array)

delete array[1]
console.log("array na 2de element deleten", array)

console.log()
let array2 = [1, ["array", "in", "een", "array"], 3]
console.log("nieuw array", array2)
newArray = array.concat(array2)
console.log("array na concat() ", newArray)

newArray = newArray.flat()
console.log("array na .flat()", newArray)

let spliced = newArray.splice(5, 2)
console.log("array na .splice(5, 2)", newArray)

newArray.splice(5, 0, spliced)
console.log("array na splice(spliced) om het weer terug te zetten", newArray)

let sliced = newArray.slice(0, 4)
console.log("sliced(0, 4) van de array", sliced)
console.log("en de originele array is er nog", newArray)