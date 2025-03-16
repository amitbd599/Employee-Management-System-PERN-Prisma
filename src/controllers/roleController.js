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
