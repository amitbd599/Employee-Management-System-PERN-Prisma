import express from "express";

import {
  createUser,
  deleteSingleUser,
  getAllUser,
  getSingleUser,
  getUserByRole,
  updateSingleUser,
} from "../controllers/userController.js";
import {
  createDepartment,
  getAllDepartment,
  getSingleDepartment,
} from "../controllers/departmentController.js";

const router = express.Router();

// User routes
router.post("/create-user", createUser);
router.get("/get-all-user", getAllUser);
router.get("/get-single-user/:id", getSingleUser);
router.get("/get-user-by-role/:role", getUserByRole);
router.delete("/delete-single-user/:id", deleteSingleUser);
router.put("/update-single-user/:id", updateSingleUser);

// Department routes
router.post("/create-department", createDepartment);
router.get("/get-all-department", getAllDepartment);
router.get("/get-single-department/:id", getSingleDepartment);

export default router;
