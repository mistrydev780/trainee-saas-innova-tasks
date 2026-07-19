import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({

        origin: "http://localhost:5173",

        credentials: true

    })
);


//APIs Call
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 8000;

AppDataSource.initialize()

.then(() => {

    console.log("Database Connected");

    app.listen(PORT, () => {

        console.log(`Server Running On ${PORT}`);

    });

})

.catch((error) => {

    console.log(error);

});