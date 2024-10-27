import express from "express";
import "./database.js";
import cors from "cors";

import cutRoute from "./src/routes/cutRouter.js";
import redirectRouter from "./src/routes/redirectRouter.js";

const app = express();
const port = 3000;

app.use(express.json());

// Usa el middleware de CORS directamente
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['X-Requested-With', 'Content-Type'],
    credentials: true,
}));

// Define tus rutas
app.use("/", cutRoute);
app.use("/", redirectRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
