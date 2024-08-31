import express, { urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path"

const app = express();

//Middleware
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Routes


//Static Files
app.use("/uploads", express.static(path.join("uploads")));
app.use("/", express.static(path.join("public")));

export default app;