import express from 'express';
import cors from "cors";
import especiesRoutes from './routes/especies.routes.js';
import morgan from "morgan";
import config from "./config.js";


const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", especiesRoutes);

export default app;