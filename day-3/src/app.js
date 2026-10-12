// server ko create kara
// server ko config kara



const express = require("express");


const app = express()

const notes = []


// middlewares
app.use(express.json())



// apis

app.post("/notes", (req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    console.log(notes);
    

    res.send("Note Created Successfully")
})


app.get("/notes", (req,res)=>{
    res.send(notes)
})


app.delete("/notes/:index", (req,res)=>{

    delete notes[req.params.index]

    res.send("Notes Deleted Successfully")
    
})



app.patch("/notes/:index", (req,res)=>{

    notes[req.params.index].description = req.body.description

    res.send("Notes Updateded Successfully")
})







module.exports = app;