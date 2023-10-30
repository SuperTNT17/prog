let readlineSync = require('readline-sync')

let lijst = []
let action = ""

while (action != "exit") {
    printLijst()
    askQuestion()
}

function askQuestion(){
    action = readlineSync.question("Wat wil je doen? toevoegen (t) of verwijderen (v)? ").toLowerCase()
    if (action == "t") {
        toevoegen(readlineSync.question("Wat wil je toevoegen? "))
    }else if(action == "v"){
        verwijderen(readlineSync.question("Wat wil je verwijderen? "))
    }
    console.clear()
}

function printLijst(){
    if (lijst.length < 1) {
        console.log("Jouw lijst is nog leeg!")
    }
    else{
        console.log("Jouw lijst bevat:", lijst.join(", "))
    }
}

function toevoegen(item){
    lijst.push(item)
}

function verwijderen(item){
    for (let i = 0; i < lijst.length; i++) {
        const element = lijst[i];
        if (element == item) {
            lijst.splice(i,1)
        }
    }
}