var readlineSync = require('readline-sync')

let birthYear = readlineSync.question("Welk jaar ben je geboren? ")
let birthMonth = readlineSync.question("Welke maand ben je geboren? ")
let birthDay = readlineSync.question("Welke dag ben je geboren? ")

function calculateAge(birthYear, birthMonth, birthDay){
    let now = new Date();
    let birth = new Date(birthYear, birthMonth, birthDay); 
    let miliseconds = now - birth;
    let seconds = miliseconds / 1000
    let hours = seconds / 3600
    let days = hours / 24
    return years = days / 365
}

let age = calculateAge(birthYear, birthMonth, birthDay)
console.log(age)