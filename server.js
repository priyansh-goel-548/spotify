import dotenv from "dotenv"
import connectDB from "./src/db/index.js"
import app from "./src/app.js";
import dns from'dns'

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config({
    path: './.env'
})

connectDB();

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});