const mongoose = require('mongoose');

const connection = ()=>{
    mongoose.connect(process.env.DB_PATH).then(res =>{
        console.log('Mongodb connection successful')
    }).catch(err =>{
        console.log(`Error is: ${err}`)
    })
}


module.exports = connection