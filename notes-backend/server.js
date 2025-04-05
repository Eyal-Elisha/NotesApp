import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./routes/notes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(notesRoutes)

const {MONGO_URI, PORT} = process.env;

mongoose.connect(MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err));

app.get('/', (req,res) => {
    res.send('Hello, world!');
});

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});
