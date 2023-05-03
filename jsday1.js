function minimal(a, b) {
    if(a === b) {
        return a
    } else if(a < b) {
        return a
    } else {
        return b
    }
}

console.log(minimal(3, 5))
console.log(minimal(9, 7))
console.log(minimal(1, 1))

function findIndex(array, number) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === number) {
            return i
        }
    }
    return -1
}
console.log(findIndex([1,2,3,4,5], 3));
console.log(findIndex([1,2,3,4,5], 6));
console.log(findIndex([1,2,3,4,5], 4));
