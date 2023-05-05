// function getProvinces(countryId, callback) {

//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             if (countryId === 'id') {
//                 callback(null, [
//                   { id: 'id-jk', name: 'Jakarta' },
//                   { id: 'id-bt', name: 'Banten' },
//                   { id: 'id-jr', name: 'Jawa Barat' },
//                 ]);

//                 return resolve(countryId)
                
//             }

//             return reject(new Error('Country not found'))

//             }, 1000);
//     })
// }



// function getProvinces(countryId) {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             const countryId = [
//                 { id: 'id-jk', name: 'Jakarta' },
//                 { id: 'id-bt', name: 'Banten' },
//                 { id: 'id-jr', name: 'Jawa Barat' },
//             ]

//             if(countryId === 'id') {
//                 return resolve(countryId)
//             } else {
//                 return reject( new Error('Country not found'))
//             }
                
//         }, 1000)
//     })
// }

// getProvinces('id')
// .then(countryId => console.log(countryId))
// .catch(err => console.log(err))

const util = require('util')

function getProvinces(countryId, callback) {
    setTimeout(() => {
      if (countryId === 'id') {
        callback(null, [
          { id: 'id-jk', name: 'Jakarta' },
          { id: 'id-bt', name: 'Banten' },
          { id: 'id-jr', name: 'Jawa Barat' },
        ]);
        return;
      }
  
      callback(new Error('Country not found'), null);
    }, 1000);
  }