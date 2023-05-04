const nama = {
    firstName: 'muhammad',
    lastName: 'ardians'
}

console.log(nama)

const rename = (newName, nama) => {
    return { ...nama, lastName: newName }
}

console.log(rename('ardiansyah', nama))



// array map untuk menghasilkan nilai baru
const motor = ['yamaha', 'honda', 'suzuki', 'bmw', 'kawasaki']

const baru = motor.map( (motor) => {
    return `${motor}`
})

console.log(baru)

// array filter menyaring array
const rand = ['1', '', null, true, 0, 'satu', 'dua', 'lima']

const baru1 = rand.filter( (newRand) => Boolean(newRand))

console.log(baru1)

// array reduce array yang mengembalikan satu nilai saja

const siswa = [
    {
        nama: 'daki',
        saldo: 30000
    },
    {
        nama: 'abi',
        saldo: 20000
    },
    {
        nama: 'adi',
        saldo: 25000
    }
]

const baru2 = siswa.reduce((acc, item) => acc + item.saldo, 0)

console.log(baru2)

// array some array yang akan menghasilkan nilai bolean
const angka = [1, 2, 3, 4, 5, 6]

const baru3 = angka.some( (item) => item % 2 === 0)

console.log(baru3)

// array find mengambil elemen tertentu jika null menghasilkan undefine
// gunakan array siswa
const baru4 = siswa.find( (item) => {
    return{
        ...item,
        namane: item.nama
    }
})

console.log(baru4)

// array sort merupakan array yang mengurutkan sebuah nilai secara ascanding

const number = [1, 4, 5, 2, 8, 6]
const siswi = ['kamila', 'bita', 'syifa', 'angel', 'ina']
console.log(number.sort())
console.log(siswi.sort())

// array evry array yang akan mengecek suatu array apakah nilainya sesuai kriteria
// gnakan array siswa
const minimal = 10000
const baru5 = siswa.every( (item) => item.saldo >= minimal)
console.log(baru5)

// array foreach digunakan untuk mencetak array namun hanya sekedar mencetak
// gunakan array siswi

const baru6 = siswi.forEach( (item) => {
    console.log(`${item}😊`)
})
//console.log(baru6)