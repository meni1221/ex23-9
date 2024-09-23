import express from "express";
import fs from "fs/promises";
import {v4} from 'uuid'

const app = express();

app.use(express.json())

const port = 7499;

app.get("/", (req, res) => {
  res.send("welcome to my amnunition Center");
});

app.get("/amn", async (req, res) => {
  try {
    //get the data from file
    const data = JSON.parse(await fs.readFile("./data.json", "utf-8"));
    //sent it to the client
    res.json(data);
  } catch (err) {
    res.status(500).json({
      err: true,
      message: err,
    });
  }
});

app.get("/amn/summary",async (req, res) => {
    try{
        const data = JSON.parse(await fs.readFile("./data.json", "utf8"));
        const result = data.reduce((obj, curr)=>{
            curr.active && obj.active ++,
            curr.status && obj.in_stock ++
            return obj
        },{
            active:0,
            in_stock:0

        })
        result.sum = data.length
        res.json(result)
    }catch (err){
        res.status(500).json({
            err:true,
            message:err
        })
    }

});

app.get("/amn/:id", async (req, res) => {
  try {
    //get data from file
    const data = JSON.parse(await fs.readFile("./data.json", "utf8"));
    //find the one with right id
    const amn = data.find((am) => am.id === req.params.id);
    //send it back to the client
    res.json(amn);
  } catch (err) {
    res.status(500).json({
      err: true,
      message: err,
    });
  }
});


app.post("/amn",async (req, res) => {
    try{
        const data = JSON.parse(await fs.readFile("./data.json","utf8"))
        data.push({
            id: v4(),
            ...req.body
        })
        await fs.writeFile('./data.json', JSON.stringify(data),{
            encoding:'utf8'
        })
        res.send(req.body)
    }catch(err){
        console.log(err)
        res.status(500).json({
            err:true,
            message:err
        })

    }
});

app.patch("/amn/:id", (req, res) => {
  res.send("welcome to my amnunition Center");
});

app.listen(port, () => {
  console.log(`server started on port: ${port} visit http://localhost:${port}`);
});
