import express from "express";

import {
  createUser,
  deleteSingleUser,
  getAllUser,
  getSingleUser,
  getUserByRole,
} from "../controllers/userController.js";
import { createDepartment } from "../controllers/departmentController.js";

const router = express.Router();

// User routes
router.post("/create-user", createUser);
router.get("/get-all-user", getAllUser);
router.get("/get-single-user/:id", getSingleUser);
router.get("/get-user-by-role/:role", getUserByRole);
router.delete("/delete-single-user/:id", deleteSingleUser);

// Department routes
router.post("/create-department", createDepartment);

export default router;
