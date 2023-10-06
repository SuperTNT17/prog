function myFunction(){
    console.log("Hello world")
    console.log("Complex stuff")
}

myFunction()

function add(a, b){
    let result = a + b
    console.log(`${a} + ${b} = ${result}`)
}

add(98, 625)

function largerNum(number1, number2){
    if(number1 > number2)
    {
        return number1
    }
    else if (number1 == number2)
    {
        return 0
    }
    else
    {
        return number2
    }
}

let largerNumber = largerNum(20, 10)
console.log(largerNumber)