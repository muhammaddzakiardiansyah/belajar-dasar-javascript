const Cupang = function(jenis, gander, warna, harga) {
    this.jenis = jenis,
    this.gander = gander,
    this.warna = warna,
    this.harga = harga
}

Cupang.prototype.tanyaHarga = function() {
    console.log(`cupang ${this.jenis} harganya ${this.harga} gander ${this.gander} warnanya ${this.warna}`)
}

const cupang1 = new Cupang('plakat', 'male', 'koi metalic', 400);
const cupang2 = new Cupang('halfmoon', 'male', 'super red', 200);

console.log(cupang1)
console.log(cupang2)

cupang1.tanyaHarga()

class Tanaman {
    constructor(nama, harga, minimalPembelian) {
        this.nama = nama,
        this.harga = harga,
        this.minimalPembelian = minimalPembelian
    }

    beli1() {
        console.log(`beli satu dengan nama tanaman ${this.nama} minmal pembelian ${this.minimalPembelian} harganya ${this.harga}`);
    }

    beli2() {
        const harga = this.harga + this.harga
        console.log(`beli dua dengan nama tanaman ${this.nama} minimal pembelian ${this.minimalPembelian} harganya ${harga}`);
    }
}

const tumbas1 = new Tanaman('kayu jaran', 75000, 2)

tumbas1.beli2()

console.log(tumbas1)