import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import { connection } from './database/connection.js';
import categoryRoutes from './src/modules/category/category.routes.js';
import { allRoutes } from './src/modules/routes.js';
import { appError } from './src/utils/appError.js';

const app = express()
const port = 3000
app.use(express.json())
app.use("/uploads", express.static("uploads"))





allRoutes(app)

connection()


app.use("*", (req, res, next) => {
    next(new appError(`invalid URL ${req.originalUrl}`, 404))
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.statusCode).json({ message: err.message, stack: err.stack })


})




app.listen(port, () => console.log(`app listening on port ${port}!`))