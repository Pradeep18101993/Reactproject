const express=require('express');
const app=express();
const cors=require('cors');
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "register",
});

app.post('/api',(req,res)=>{
  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.password;
   db.query(
     "INSERT INTO reg (name,email,password) VALUES(?,?,?)",
     [name, email, password],
     (err, result) => {
       if (result) {
         res.send(result);
       } else {
         res.send({ err: err });
       }
     }
   );
})

app.post('/login',(req,res)=>{
  const name=req.body.name;
  const email=req.body.email;

  const select="SELECT * FROM reg WHERE name=? AND email=?";
  db.query(select,[name,email],(err,result)=>{
    if(result.length>0)
    {
      res.send(result);
    }
    else{
      res.send({err:err});
    }
  })
})

app.listen(5000,()=>{
  console.log('started port ');
})