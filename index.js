import express from 'express';
import mysql from 'mysql';
import prompt from 'prompt-sync';

const app = express();
console.log("hello");
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

con.connect(function(error){
    if(error) throw error;
    console.log("connected!");
});

// con.query("select * from students", function(error, result){
//     if(error) throw error;
//     console.log(result);
// })
// con.query("insert into students values(1, 'fsdasdfdfad', 23)");
// const id = prompt('enter id');
const id=1;
let name;
// const q = con.query(`select name from students where id=${id}`, (err, data)=>{
//     // console.log(data);
//     name=data;
// });
// console.log(name);
async function querying(id){
    const q = await con.query(`select name from students where id=${id}`, (err, data)=>{
            // console.log(data);
            name=data;
        });
        return q;
    }
    querying(id);
    // console.log(a);




