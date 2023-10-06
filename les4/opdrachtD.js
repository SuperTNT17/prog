console.log(factoriaal(5))

function factoriaal(number){
    let factoriaal = 1
    while(number != 0){
        factoriaal *= number
        number--
    }
    return factoriaal
}