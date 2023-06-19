import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";

// initialize our app
const app = express();
dotenv.config();



// connnect to database (mongodb)
const connect = async () => {
try {
 await mongoose.connect(process.env.MONGO);
  console.log("connected to mongodb");
} catch (error) {
 throw error;
}
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});



//middlewares
app.use(express.json());
app.use ("/api/auth", authRoute);
app.use ("/api/users", usersRoute);
app.use ("/api/hotels", hotelsRoute);
app.use ("/api/rooms", roomsRoute);



//execute our app in port 8800
app.listen(8800, ()=>{
    connect();
    console.log("connected to backend server");
} )