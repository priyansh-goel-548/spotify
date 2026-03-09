import express from "express";
import cookieParser from "cookie-parser";
import router from "./routes/auth.routes";

const app = express();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use(express.json());
app.use(cookieParser());
app.use('.api/auth', router)

export default app;