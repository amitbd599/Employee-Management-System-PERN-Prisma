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
  deleteSingleEmployee,
  getAllEmployee,
  getSingleEmployee,
  updateRoleEmployee,
} from "../controllers/employeeController.js";
import {
  createRole,
  deleteSingleRole,
  getAllRole,
  getSingleRole,
  updateRoleDepartment,
} from "../controllers/roleController.js";
import { AuthVerification } from "../middlewares/AuthVerification.js";
import { uploadFile } from "../middlewares/FileUploads.js";
import {
  fileDelete,
  fileUpload,
  getAllFile,
} from "../controllers/fileUploadController.js";

const router = express.Router();

// User routes
router.post("/create-user", createUser);
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
router.delete("/delete-single-department/:id", deleteSingleDepartment);
router.put("/update-single-department/:id", updateSingleDepartment);

// role routes
router.post("/create-role", createRole);
router.get("/get-all-role", getAllRole);
router.get("/get-single-role/:id", getSingleRole);
router.delete("/delete-single-role/:id", deleteSingleRole);
router.put("/update-single-role/:id", updateRoleDepartment);

// employee routes
router.post("/create-employee", createEmployee);
router.get("/get-all-employee/:limit/:pageNo", getAllEmployee);
router.get("/get-single-employee/:id", getSingleEmployee);
router.delete("/delete-single-employee/:id", deleteSingleEmployee);
router.put("/update-single-employee/:id", updateRoleEmployee);

// file routes
router.post(
  "/file-upload",
  // AuthVerification,
  uploadFile.single("file"),
  fileUpload
);
router.get("/get-all-file", getAllFile);
router.delete("/delete-file/:id", fileDelete);

export default router;
