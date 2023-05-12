import app from "./app.js";

import dotenv from "dotenv";
import connectDatabase from "./config/database.js";

dotenv.config({ path: "./config/config.env" });

connectDatabase();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(
        `Server started on port ${process.env.PORT}`
    )
})