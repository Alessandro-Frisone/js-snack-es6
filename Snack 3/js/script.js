// Funzione che accetti trew argometni (array e due numeri)
function filter(array, a, b) {
    let secondArray = []
    for (let i = 0; i < array.length; i++) {
        if (a <= i && i <= b) {
            secondArray.push(array[i])
        }
    }
    return secondArray;
}
const finalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(filter(finalArray, 1, 8))