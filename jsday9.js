function panggilkan(keadaan) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const namanya = 'Muhammad Abimantra ardiansyah!'

            if(keadaan) {
                return reject(new Error('Orangnya sedang tidur!'))
            }

            return resolve(namanya)
        }, 3000)
    })
}

panggilkan(true)
.then(namanya => console.log(namanya))
.catch(err => console.log(err))