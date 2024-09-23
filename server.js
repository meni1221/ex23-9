import express from 'express'
import fs from 'fs/promises'

const app = express()

const port = 7499

app.get('/', (req,res)=>{
    res.send("welcome to my amnunition Center")
})

app.get('/amn',async (req,res)=>{
    try{
            //get the data from file
    const data = JSON.parse (await fs.readFile('./data.json','utf-8'))
    //sent it to the client
    res.json(data)
    } catch(err){
        res.status(500).json({
            err:true,
            message: err
        })
    }

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