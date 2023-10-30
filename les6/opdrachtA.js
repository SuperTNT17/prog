let readlineSync = require('readline-sync')

let zin = readlineSync.question("Zeg iets: ")

console.log(mockZin(zin))

function mockZin(zin){
    let nieuweZin = ""
    for (let i = 0; i < zin.length; i++) {
        let element = zin[i]
        if (i % 2 == 0) {
            element = element.toUpperCase()
        }
        nieuweZin += element
    }
    return nieuweZin
}