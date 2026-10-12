// server ko Start karnaa
// dataase se conncet karna

require("dotenv").config()
const app = require("./src/app");
const connectToDB = require("./src/database/database")

connectToDB()




app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})