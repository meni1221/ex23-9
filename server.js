import express from 'express'

const app = express()

const port = 7499

app.get('/',(req,res)=>{
    res.send("welcome to my amnunition Center")
})

app.get('/amn',(req,res)=>{
    res.send("welcome to my amnunition Center")
})

app.get('/amn/:id',(req,res)=>{
    res.send("welcome to my amnunition Center")
})

app.get('/amn/summary',(req,res)=>{
    res.send("welcome to my amnunition Center")
})

app.post('/amn',(req,res)=>{
    res.send("welcome to my amnunition Center")
})

app.patch('/amn/:id',(req,res)=>{
    res.send("welcome to my amnunition Center")
})



app.listen(port, ()=>{
    console.log(`server started on port: ${port} visit http://localhost:${port}`);
    
})