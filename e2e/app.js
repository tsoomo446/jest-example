import express from "express";
const app = express();

import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./config/config.env" });

app.use(express.json());
app.use(cookieParser());

import auth from "./routes/auth.js";
import todos from "./routes/todo.js";

app.use("/api/v1", auth);
app.use("/api/v1", todos);

app.all("*", (req, res) => {
    return res.status(404).json({ error: "Route not found" });
})

export default app;