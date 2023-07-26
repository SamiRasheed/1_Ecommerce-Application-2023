import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "../StuffHub/routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
// import path from "path";

// configure env

// dotenv.config({path:'/'}); if we have dotenv file in any other folder then we use it
dotenv.config();

//(--6--) database connect
connectDB();

//(--1--)rest object to create api
const app = express();

//(--5--) middlewares
// fontend ----server ko connect krtay wqt error na aye
app.use(cors());
// ---------------
app.use(express.json());
app.use(morgan("combined"));

//(--7--) routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//(--2--) rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-Commerce App </h1>");
});

// Static forlder
// app.use(express.static(path.join(__dirname, "./client/build")));
// Static Routes
// app.get("*", function (req, res) {
// res.sendFile(path.join(__dirname, "./client/build.index.html"));
// });

// port number to add secure we create env file and link to it

const PORT = process.env.PORT || 8080;

//(--3--) npm listen
// backtick is used to make page dynamilcally
app.listen(PORT, () => {
  console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
