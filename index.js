const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors());
app.use(express.json());
app.get('/api',(req,res)=>{
  res.json({message:"how are you"});
})

app.listen(5000,()=>{
  console.log('started port ');
})