let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());

if(huidigeTijd.getHours() > 9 || huidigeTijd.getHours() < 17){
    console.log("ik moet op school zijn")
}