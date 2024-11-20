import express from "express";
import cors from "cors";

export const app = express();

app.use(express.json());

// cors configured
app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);
