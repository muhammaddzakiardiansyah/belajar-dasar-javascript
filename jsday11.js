// promise all

// mengembalikan semua promise

const Promise1 = new Promise( (resolve) => setTimeout( () => resolve(1), 1000))
const Promise2 = new Promise( (resolve) => setTimeout( () => resolve(2), 1000))
const Promise3 = new Promise( (resolve) => setTimeout( () => resolve(2), 1000))

Promise.all([Promise1, Promise2, Promise3]).then((result) => console.log(result)).catch( (err) => console.log(err))


// promise race

// mengembalikan promise dengan waktu tercepat


const Promise1_1 = new Promise( (resolve) => setTimeout( () => resolve(1), 1001))
const Promise2_2 = new Promise( (resolve) => setTimeout( () => resolve(2), 2000))
const Promise3_3 = new Promise( (resolve) => setTimeout( () => resolve(3), 1000))

Promise.race([Promise1_1, Promise2_2, Promise3_3]).then( (result) => {
    return console.log(result)
})