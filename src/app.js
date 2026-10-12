import express from "express"
import cors from "cors"            // Cross origin resource sharing
                                   // Controls which websites are allowed to make requests to your backend form a browser
import cookieParser from "cookie-parser"     // parses the cookies into redable JS object, can be accessed through req.cookies

const app = express()

app.use(cors({                 
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({               // Limits the amount of Json 
    limit: "16kb"
}))
app.use(express.urlencoded({         // can give nested objects 
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())               // to perform operations on User's cookies

export {app}