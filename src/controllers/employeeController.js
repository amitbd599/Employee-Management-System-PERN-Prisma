import prisma from "../../config/db.js";

//! create Employee
export const createEmployee = async (req, res) => {
  try {
    let { name } = req.body;

    const isEmployee = await prisma.employee.findUnique({
      where: {
        name,
      },
    });

    if (!!isEmployee === true) {
      return res.status(409).json({ message: "Employee already exists" });
    }

    let employee = await prisma.employee.create({
      data: {
        name,
      },
    });
    res
      .status(201)
      .json({ message: "Employee created successfully", employee });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating employee", error: error.toString() });
  }
};
