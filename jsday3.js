class Cupang {
    #harga = null;
    constructor(nama, gender, warna) {
        this.nama = nama,
        this.gender = gender,
        this.warna = warna
        this.#harga = this.#cetakHarga()
    }

    harga(harga) {
        console.log(`Kamu tidak memiliki akses untuk mengubah ini`)
    }

    #cetakHarga() {
      return Math.floor(Math.random() * 1000)
    }
}

const beli1 = new Cupang('plakat', 'male', 'hitam')

console.log(beli1)


class Pesan {
    constructor(pesan) {
        this.pesan = pesan
    }

    kirimPesan(pesannya, unutkSiapa) {
         return `ada pesan dari ${this.pesan} ${pesannya} untuk ${unutkSiapa}`
    }
}

const pesan1 = new Pesan('+6289764676432')
console.log(pesan1.kirimPesan('hai dzakyyy!!!', '+628765434567'))


class Tentara {
    constructor(nama) {
        this.nama = nama
    }

    siapa() {
        return `${this.nama} adalah seorang tentara...`
    }
}

function menjagaWilayahDarat(tentara) {
    return {
        wilayahDarat : () => {
            console.log(`${tentara.nama} adalah tentara angkatan darat...`)
        }
    }
}

function menjagaWilayahLaut(tentara) {
    return {
        wilayahLaut : () => {
            console.log(`${tentara.nama} adalah tentara angkatan laut...`)
        }
    }
}

function mwnjagaWilayahUdara(tentara) {
    return {
        wilayahUdara : () => {
            console.log(`${tentara.nama} adalah tentara angkatan udara...`)
        }
    }
}

function tambahTentara(nama) {
    const tentara = new Tentara(nama)
    return Object.assign(tentara, menjagaWilayahDarat(tentara))
}

const tentara1 = tambahTentara('abimantra')
console.log(tentara1)
