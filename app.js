function getDataType(Data) {
    console.log(typeof Data);
}

getDataType(1)


// var strings = ['string','fromString','toString','balloon']

function reservedString(str) {
    let reservedStrings = ""

    for (let i = str.length -1; i >= 0; i--){
        reservedStrings += str[i]
    }

    return reservedStrings
}

// var reservedStrings= []
// for (let string off strings){
//     reservedStrings.push(string(str))
// }
console.log(reservedString('hello'))
