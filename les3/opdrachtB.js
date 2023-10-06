function berekenInhoudKubus(length, width, height){
    return inhoud = length * width * height
}

function berekenInhoudCylinder(diameter, height){
    let radius = diameter / 2
    return inhoud = Math.pow(radius, 2) * Math.PI * height
}

function berekenLengteLangeZijdeDriehoek(length, height){
    let lengthSquared = Math.pow(length, 2) + Math.pow(height, 2)
    return Math.sqrt(lengthSquared)
}

function berekenGemiddeldeZevenGetallen(number1, number2, number3, number4, number5, number6, number7){
    let total = number1 + number2 + number3 + number4 + number5 + number6 + number7
    return average = total / 7
}

let kubusInhoud = berekenInhoudKubus(10, 5, 10);
console.log(kubusInhoud)

let cylinderInhoud = berekenInhoudCylinder(5, 20)
console.log(cylinderInhoud)

let LengteLangeZijdeDriehoek = berekenLengteLangeZijdeDriehoek(3, 4)
console.log(LengteLangeZijdeDriehoek)

let gemiddeldeVanZevenGetallen = berekenGemiddeldeZevenGetallen(10, 10, 10, 10, 10, 10, 9)
console.log(gemiddeldeVanZevenGetallen)