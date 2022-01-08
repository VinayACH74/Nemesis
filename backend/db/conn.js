const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("Connection successfully established")
}).catch(()=>{
    console.error(err);
})