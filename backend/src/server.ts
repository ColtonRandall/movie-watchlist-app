import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get("/", (_req: Request, res: Response) => {
  res.send("API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
