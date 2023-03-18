// Code your solutions in this file

const countDown = (number) => {
    while(number >= 0){
        console.log(number)
        number--
    }
}
const writeCards = (names) => {
    let count = 0
    let manyThanks = []
    while(count <= names.length - 1){
        manyThanks.push(`Thank you, ${names[count]}, for the wonderful surprise gift!`)
        count++
    }
    return manyThanks
}

countDown()
writeCards(['Guadalupe', 'Ollie', 'Aki'])