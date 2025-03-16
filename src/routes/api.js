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
  deleteSingleDepartment,
  getAllDepartment,
  getSingleDepartment,
  updateSingleDepartment,
} from "../controllers/departmentController.js";
import { createEmployee } from "../controllers/employeeController.js";
import { createRole } from "../controllers/roleController.js";

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
router.get("/delete-single-department/:id", deleteSingleDepartment);
router.get("/update-single-department/:id", updateSingleDepartment);

// role routes
router.post("/create-role", createRole);

// employee routes
router.post("/create-employee", createEmployee);

export default router;
