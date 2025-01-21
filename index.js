const mysql = require("mysql2")
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"padhu"
})
connection.connect((err)=>{
    if(err){
        console.log(err.message)
    }else{
       
        console.log("server connected")
    }
    
})
// connection.query("select*from emp",(err,data)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(data)
//     }
// })
module.exports=connection