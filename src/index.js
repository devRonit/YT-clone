// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./database/index.js"

dotenv.config({
    path: './env'
})

connectDB()

















// import express from "express"
// const app = express()         //making express app

// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{           // adding listeners after creating the app
//             console.log("ERROR: ", error)
//             throw error
//         })          

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.error("ERROR: ", error)
//         throw error
//     }
// })() 