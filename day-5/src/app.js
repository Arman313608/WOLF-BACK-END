const express = require("express");
const noteModel = require("./models/notes.model")



const app = express();

// middlewares
app.use(express.json())




//apis


app.post("/notes", async(req,res)=>{

    const { title, description } = req.body;

    const note = await noteModel.create({
        title,
        description
    })


    res.status(201).json({
        message: "Note Created Successfully",
        note
    })
})


app.get("/notes", async(req,res)=>{

    const notes = await noteModel.find()

    res.status(200).json({
        message: "Note Fetched Successfully",
        notes
    })
})


app.delete("/notes/:id", async(req,res)=>{

    const { title, description } = req.body;
    


    

    res.status(200).json({
        message: "Note Deleted Successfully"
    })
})


app.patch("/notes/:index", async(req,res)=>{

    notes[req.params.index].description = req.body.description

    res.status(200).json({
        message: "Note Updateded Successfully"
    })
})




module.exports = app;