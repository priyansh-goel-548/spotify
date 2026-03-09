import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes";
import musicRoutes from "./routes/music.routes" 


const app = express();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use(express.json());
app.use(cookieParser());
app.use('.api/auth', authRouter)
app.use('/api/music', musicRoutes);


export default app;