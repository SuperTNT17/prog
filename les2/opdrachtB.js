let readlineSync = require('readline-sync')

let age = readlineSync.question('Goedenavond hoe oud bent u? ')
if (age < 18) {
    console.log("Dan mag je helaas niet naar binnen.")
    return;
}

if (readlineSync.keyInYN("Mag ik je ID zien?")) {
    console.log("kom verder")
}
else {
    console.log("Dan mag je helaas niet naar binnen.")
}