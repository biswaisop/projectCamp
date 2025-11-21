import express, { urlencoded } from "express"
import cors from "cors"

const app = express()


// Badic configurations
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true, limit : "16kb"}))
app.use(express.static("public"))

//CORS configurations
app.use(
    cors({
        origin : process.env.CORD_ORIGIN?.split(",") || "http://localhost:5173",
        credentials: true,
        methods : ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders : ["Authorization", "Content-type"],
})
)




app.get("/", (req, res)=>{
    res.send("Hello")
})


export default app;