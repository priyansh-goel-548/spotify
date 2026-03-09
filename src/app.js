import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use(express.json());
app.use(cookieParser());

export default app;