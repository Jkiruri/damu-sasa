import express from "express";
import {
  createPatient,
  deletePatient,
  getPatients,
} from "../controllers/patient.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.post("/", verifyToken, createPatient);
router.delete("/:id", verifyToken, deletePatient);
router.get("/", getPatients);

export default router;
