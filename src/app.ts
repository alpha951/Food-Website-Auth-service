/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from "express";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World Auth Service!");
});

export default app;
