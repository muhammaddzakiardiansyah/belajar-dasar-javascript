function needMoney(money) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(money < 3) {
                return reject(new Error('No money..? No eat..!'))
            }

            return resolve(money)
        }, 1000)
    })
}

function buyNodel(nodel) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(!nodel) {
                return reject(new Error('No cooking nodel today'))
            }

            return resolve(nodel)
        }, 1100)
    })
}

function cookingNodel(bord) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(bord == 'malas') {
                return reject(new Error('Aku malasss'))
            }

            return resolve(bord)
        }, 1200)
    })
}

function eatNodel(yummy) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(yummy == 'No!') {
                return reject(new Error('so bad!'))
            }

            return resolve('hmmmm so yummy!')
        })
    })
}

function soEatNodel() {
    needMoney(2).then( (money) => {
        return needMoney(money)
    }).then( (nodel) => {
        return buyNodel(nodel)
    }).then( (bord) => {
        return cookingNodel(bord)
    }).then( (yummy) => {
        return eatNodel(yummy)
    }).then( (result) => {
        return console.log(result)
    }).catch( (err) => {
        return console.log(err)
    })
}

soEatNodel()