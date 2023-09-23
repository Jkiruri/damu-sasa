import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import patientRoute from "./routes/patient.route.js";
import appointmentRoute from "./routes/appointment.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import gigRoute from "./routes/gig.route.js";
import cors from "cors";
const app = express();
dotenv.config();
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to Mongo!!");
  } catch (error) {
    console.log(error);
  }
};

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/patients", patientRoute);
app.use("/api/appointments", appointmentRoute);
app.use("/api/gigs", gigRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Server is running");
});
