// We are making this class to handle HTTP errors

import { useDebugValue } from "react"

class ApiError extends Error {        // ApiError inherits the inbuilt Error class in JS
    constructor(
        statusCode, 
        message = "Something went wrong",
        errors = [],
        stack = ""    // give stack trace if you have
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors


        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export default ApiError