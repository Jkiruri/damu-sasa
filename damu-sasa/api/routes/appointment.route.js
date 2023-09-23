import express from "express";
import {
  createAppointment,
  deleteAppointment,
  getAppointments,
} from "../controllers/appointment.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.post("/", verifyToken, createAppointment);
router.delete("/:id", verifyToken, deleteAppointment);
router.get("/", getAppointments);

export default router;
