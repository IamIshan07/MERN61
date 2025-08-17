
const express = require("express")
const app = express()
// const PaymenVerfication = require("./src/middleware/payementMiddleware")
const Dbconn = require("./db/dbconn")
const userRouter = require("./src/router/userRouter")
const baserouter = require("./src/router/baseRouter")





app.use(express.json())
app.use(baserouter)
app.use(userRouter)
app.get("/", (req, res) => {
    res.send("Hello World")
})
app.get("/profile/:name/:age", (req,res) => {
    res.send("Hello" +req.params.name+ req.params.age + "years old")
})
Dbconn().then(() => {
app.listen(4000,()=>{
    console.log("server is running http://localhost:4000/")
})

})
