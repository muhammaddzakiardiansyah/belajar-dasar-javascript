const manusia = (nama, umur) => {
    return {...nama, umur}
}

const nama = {
    nama: 'abimantra'
}

const newMnausia = manusia(nama, 12)
console.log(nama, newMnausia)


function hitungan(hitungan) {
    return hitungan * hitungan
}

console.log(hitungan(2))

const names = ['abim', 'mia', 'dzaki', 'keissssssssiya']

const newNames = names.map( (nama) => `${nama}😊`)

const rename = (newNama, names) => {
    return {...names, }
}

console.log(names, newNames)