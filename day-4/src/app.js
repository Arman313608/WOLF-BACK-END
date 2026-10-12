// server ko create karnaa
// server ko config karna

const express = require("express");


const app = express();

// middelewares
app.use(express.json())


const notes = []


//apis

app.post("/notes", (req,res)=>{

    notes.push(req.body);

    res.status(201).json({
        message : "Notes Created Successfully",
    })
})




app.get("/notes", (req,res)=>{

    res.status(200).json({
        message: "Notes Fetched Successfully",
        notes
    })
})


app.delete("/notes/:index", (req,res)=>{

   delete notes[req.params.index]

   res.status(204).json({
    message: "Notes Deleteded Successfully"
   })
})


app.patch("/notes/:index", (req,res)=>{

    notes[req.params.index].description = req.body.description;

    res.status(200).json({
        message: "Note Updateded Successfully"
    })
})



module.exports = app;