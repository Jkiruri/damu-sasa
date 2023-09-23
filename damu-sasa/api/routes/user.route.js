import express from "express";
import { deleteUser, getUser } from "../controllers/user.controller.js";
const router = express.Router();

router.delete("/:id", deleteUser);
router.get("/", getUser);

export default router;
