let readlineSync = require('readline-sync')

console.log("Choose a path: ")

console.log("N (north)")
console.log("S (south)")
console.log("E (east)")
console.log("W (west)")
const answer = readlineSync.question('Please input the letter of your choice: ')

if(answer == "n" || answer == "N"){
    console.log("You went north and a tree fell on your head.")
}
if(answer == "s" || answer == "S"){
    console.log("You went south and found a coin")
}
if(answer == "e" || answer == "E"){
    console.log("You went east and ")
}
if(answer == "w" || answer == "W"){
    console.log("west")
}