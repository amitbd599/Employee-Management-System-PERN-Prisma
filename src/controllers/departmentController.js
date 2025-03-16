import prisma from "../../config/db.js";

//! create Department
export const createDepartment = async (req, res) => {
  try {
    let { name } = req.body;

    const isDepartment = await prisma.department.findUnique({
      where: {
        name,
      },
    });

    if (!!isDepartment === true) {
      return res.status(409).json({ message: "Department already exists" });
    }

    let department = await prisma.department.create({
      data: {
        name,
      },
    });
    res
      .status(201)
      .json({ message: "Department created successfully", department });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating department", error: error.toString() });
  }
};

//! get All Department
export const getAllDepartment = async (req, res) => {
  try {
    const allDepartment = await prisma.department.findMany({});

    res.status(200).json({ allDepartment });
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

//! get User by role
export const getUserByRole = async (req, res) => {
  try {
    const user = await prisma.user.findMany({
      where: {
        role: req.params.role,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    res.status(200).json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};

//! delete Single User
export const deleteSingleUser = async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: "User delete successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};
