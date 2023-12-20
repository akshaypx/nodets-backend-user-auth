import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hi");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
