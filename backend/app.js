import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json()) //specify before routes
//middleware
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose
  .connect(
    "mongodb+srv://sweekriti121:Sweeky%406194@cluster0.l5cn7p3.mongodb.net/BloggIn?retryWrites=true&w=majority"
  )
  .then(()=>app.listen(5000)).then(()=>console.log("connected to DB")).catch((err)=>console.log(err));