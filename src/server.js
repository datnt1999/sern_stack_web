import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web"
import connectDB from "./config/connectDB"
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
viewEngine(app)
initWebRoutes(app)
connectDB()
let port = process.env.PORT || 6969;
console.log(port)
app.listen(port, () => {
    console.log("Backend Nodejs is running on the port: " + port)
})