import express from "express";

import {
  createUser,
  deleteSingleUser,
  getAllUser,
  getSingleUser,
  getUserByRole,
  loginUser,
  updateSingleUser,
} from "../controllers/userController.js";
import {
  createDepartment,
  deleteSingleDepartment,
  getAllDepartment,
  getSingleDepartment,
  updateSingleDepartment,
} from "../controllers/departmentController.js";
import {
  createEmployee,
  getAllEmployee,
} from "../controllers/employeeController.js";
import {
  createRole,
  deleteSingleRole,
  getAllRole,
  getSingleRole,
  updateRoleDepartment,
} from "../controllers/roleController.js";
import { AuthVerification } from "../middlewares/AuthVerification.js";

const router = express.Router();

// User routes
router.post("/create-user", AuthVerification, createUser);
router.post("/login-user", loginUser);
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
router.put("/update-single-department/:id", updateSingleDepartment);

// role routes
router.post("/create-role", createRole);
router.get("/get-all-role", getAllRole);
router.get("/get-single-role/:id", getSingleRole);
router.get("/delete-single-role/:id", deleteSingleRole);
router.put("/update-single-role/:id", updateRoleDepartment);

// employee routes
router.post("/create-employee", createEmployee);
router.get("/get-all-employee/:limit/:pageNo", getAllEmployee);

export default router;
