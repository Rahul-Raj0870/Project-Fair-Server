const mongoose = require('mongoose')
const connection_string = process.env.CONNECTIONSTRING

mongoose.connect(connection_string).then((res)=>{
    console.log("Mongodb Atlas Connected Successfully with Pfserver");
    
}).catch(err=>{
    console.log("Mongodb Atlas Connection Failed!!");
    console.log(err);
    
    
})