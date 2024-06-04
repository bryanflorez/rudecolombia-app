import express from "express";
import morgan from 'morgan';
import authRoutes from "./routes/auth.routes.js"
import taskRoutes from "./routes/task.routes.js"
import studentRoutes from "./routes/student.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", studentRoutes);

export default app;