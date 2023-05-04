// setTimeout( () => {
//     console.log('katanya cinta sedalam samudra')
// }, 3000)
// setTimeout( () => {
//     console.log('bohongnya sakit dan berakhir juga')
// }, 7500)
// setTimeout( () => {
//     console.log('muaakkk.......')
// }, 9500)
// setTimeout( () => {
//     console.log('aku muakkk......')
// }, 11500)

function panggilNama(isOffline, cb) {

    setTimeout( () => {

        if(isOffline) {
            return cb(new Error('user sedang offline! menghubungkan kembali'), null)
         }

        const nama = ['abi', 'diki', 'budi', 'arif']
        console.log(nama)
    }, 4000)
}

function getNama()