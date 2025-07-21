import express from "express";
import { config } from "./config";
import routes from "./routes";
import { connectDB } from "./config/db";
import cors from "cors";

const app = express();

const allowedOrigins = [
  "https://jg-frontend-mauve.vercel.app",
  "http://localhost:3500",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

connectDB();

app.use("/api", routes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
