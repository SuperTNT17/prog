var readlineSync = require('readline-sync')

let random = Math.floor(Math.random() * 100)
console.log(random)
let answer = 0

while(answer != random){
    answer = readlineSync.question("Raad een getal 1 - 100 : ")
    if(answer > random){
        console.log(`${answer} is groter dan het getal`)
    }
    else if(answer < random){
        console.log(`${answer} is kleiner dan het getal`)
    }
}