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

//! delete Single Department
export const deleteSingleDepartment = async (req, res) => {
  try {
    const isDepartment = await prisma.department.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!!isDepartment === false) {
      return res.status(200).json({ message: "Department not exists." });
    }

    await prisma.department.delete({
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

    // step 1:
    const isDepartmentId = await prisma.department.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!!isDepartmentId === false) {
      return res.status(200).json({ message: "Department not exists." });
    }

    // step 2: check if department name already exists
    const isDepartment = await prisma.department.findUnique({
      where: {
        name,
      },
    });

    if (!!isDepartment === true) {
      return res.status(409).json({ message: "Department already exists." });
    }

    // step 3: update department
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
