var readlineSync = require('readline-sync')

//Opdracht1()
Opdracht2()

function Opdracht1(){
    for (let i = 0; i < 1001; i++) {
        console.log(i)
    }
}

function Opdracht2(){
    let correctAnswer = 2
    let answer
    while (answer != correctAnswer) {
        answer = readlineSync.question("Wat is 1+1? ")
    }
    console.log("Gefeliciteerd!")
}