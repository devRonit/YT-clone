// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./database/index.js"
import { app } from "./app.js"

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{                                //when the promise from connectDB finishes then do this
    const server = app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    })

    server.on("error", (error)=>{
        console.log("ERROR: ", error)
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed !!!", error)
})

export default connectDB





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