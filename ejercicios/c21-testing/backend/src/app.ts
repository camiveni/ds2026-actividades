import express, { Request, Response } from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import libroRoutes from "./routes/libro.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/libros", libroRoutes);

app.use((req: Request, res: Response) => { 
    res.status(404).json({ error: "Ruta no encontrada" }); 
});

export default app;