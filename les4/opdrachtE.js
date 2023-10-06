var readlineSync = require('readline-sync')
let score = 0
let answer

console.clear()

while (answer != "nee") {
    console.log(`score: ${score}`)
    answer = readlineSync.question("Wil je klikken? ")
    if(answer == "ja" || answer == ""){
        score++
    }
    console.clear()
}

console.log(`Game over je score is ${score} punten`)