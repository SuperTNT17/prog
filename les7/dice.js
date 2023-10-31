
console.log("str ", str = RandomStat())
console.log("dex ", dex = RandomStat())
console.log("con ", con = RandomStat())
console.log("int ", int = RandomStat())
console.log("wis ", wis = RandomStat())
console.log("cha ", cha = RandomStat())

function RandomStat(){
    let numbers = []
    RollDice(numbers)
    SortArray(numbers)
    return AddValues(numbers)
}

function RollDice(array){
    for (let i = 0; i < 4; i++) {
        array[i] = Math.ceil(Math.random() * 6)
    }
}

function SortArray(array){
    array.sort()
    array.shift()
}

function AddValues(array){
    return array[0] + array[1] + array[2]
}