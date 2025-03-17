import prisma from "../../config/db.js";

//! create role
export const createRole = async (req, res) => {
  try {
    let { name } = req.body;

    const isEmployee = await prisma.role.findUnique({
      where: {
        name,
      },
    });

    if (!!isEmployee === true) {
      return res.status(409).json({ message: "Role already exists" });
    }

    let role = await prisma.role.create({
      data: {
        name,
      },
    });
    res.status(201).json({ message: "Role created successfully", role });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating role", error: error.toString() });
  }
};

//! get All Role
export const getAllRole = async (req, res) => {
  try {
    const allRole = await prisma.role.findMany({});

    res.status(200).json({ allRole });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};

//! get Single Department
export const getSingleDepartment = async (req, res) => {
  try {
    const department = await prisma.department.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ department });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};

//! delete Single Department
export const deleteSingleDepartment = async (req, res) => {
  try {
    const department = await prisma.department.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: "Department delete successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};

//! update Single Department
export const updateSingleDepartment = async (req, res) => {
  try {
    let { name } = req.body;
    const department = await prisma.department.update({
      where: {
        id: req.params.id,
      },

      data: {
        name,
      },
    });

    res
      .status(200)
      .json({ message: "Department update successfully.", department });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};
