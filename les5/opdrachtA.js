let readlineSync = require('readline-sync')

let playerName = "Robin"
let playerHealth = 20

let monsterName = "Zombie"
let monsterHealth = 20
let monsterAlive = true

console.log(`Je komt een ${monsterName} tegen`)

while (monsterAlive) {
    console.log(`Je hebt ${playerHealth} HP.`)
    choice = readlineSync.question("Wat ga je doen? (vechten of vluchten?) ")
    if (choice == "vechten") {
        Vechten()
        if (monsterHealth <= 0) {
            console.log(`${playerName} heeft de ${monsterName} verslagen!`)
            monsterAlive = false
        }
    }
    else if (choice == "vluchten") {
        Vluchten()
        break
    }
    console.log("")
}

function Vechten(){
    playerAttack = Math.floor(Math.random() * (6 - 1) + 1)
    console.log(`${playerName} zwaait zijn zwaard en doet ${playerAttack} schade.`)
    monsterHealth -= playerAttack
    monsterAttack = Math.floor(Math.random() * (4 - 2) + 1)
    console.log(`${monsterName} valt aan en doet ${monsterAttack} schade.`)
    playerHealth -= monsterAttack
}

function Vluchten(){
    console.log(`${playerName} rent weg van de ${monsterName}`)
}