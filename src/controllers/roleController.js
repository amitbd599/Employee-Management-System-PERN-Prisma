import prisma from "../../config/db.js";

//! create role
export const createRole = async (req, res) => {
  try {
    let { name } = req.body;

    const isRole = await prisma.role.findUnique({
      where: {
        name,
      },
    });

    if (!!isRole === true) {
      return res
        .status(200)
        .json({ success: false, message: "Role already exists" });
    }

    let role = await prisma.role.create({
      data: {
        name,
      },
    });
    res
      .status(201)
      .json({ success: true, message: "Role created successfully", role });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating role",
      error: error.toString(),
    });
  }
};

//! get All Role
export const getAllRole = async (req, res) => {
  try {
    const allRole = await prisma.role.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    res.status(200).json({ success: true, allRole });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.toString(),
    });
  }
};

//! get Single Role
export const getSingleRole = async (req, res) => {
  try {
    const role = await prisma.role.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ success: true, role });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.toString(),
    });
  }
};

//! delete Single Role
export const deleteSingleRole = async (req, res) => {
  try {
    const isRole = await prisma.role.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!!isRole === false) {
      return res
        .status(200)
        .json({ success: false, message: "Role not exists." });
    }

    await prisma.role.delete({
      where: {
        id: req.params.id,
      },
    });

    res
      .status(200)
      .json({ success: true, message: "Role delete successfully." });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.toString(),
    });
  }
};

//! update Single Role
export const updateRoleDepartment = async (req, res) => {
  try {
    let { name } = req.body;

    // step 1 - check role id exists
    const isRoleId = await prisma.role.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!!isRoleId === false) {
      return res
        .status(200)
        .json({ success: false, message: "Role not found." });
    }

    // step 2 - check if role name exists
    const isRole = await prisma.role.findUnique({
      where: {
        name,
      },
    });

    if (!!isRole === true) {
      return res
        .status(200)
        .json({ success: false, message: "Role already exists" });
    }

    // step 3 - update role
    const role = await prisma.role.update({
      where: {
        id: req.params.id,
      },

      data: {
        name,
      },
    });

    res
      .status(200)
      .json({ success: true, message: "Role update successfully.", role });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.toString(),
    });
  }
};
