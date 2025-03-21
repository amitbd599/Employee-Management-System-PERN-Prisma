import prisma from "../../config/db.js";

//! create Employee
export const createEmployee = async (req, res) => {
  try {
    let { firstName, lastName, email, phone, salary, departmentId, roleId } =
      req.body;

    const isEmployee = await prisma.employee.findUnique({
      where: {
        email,
      },
    });

    if (!!isEmployee === true) {
      return res.status(409).json({ message: "Employee already exists" });
    }

    let employee = await prisma.employee.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        salary,
        departmentId,
        roleId,
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

//! get All Employee
export const getAllEmployee = async (req, res) => {
  try {
    const pageNo = parseInt(req.params.pageNo);
    const limit = parseInt(req.params.limit);
    const skip = (pageNo - 1) * limit;
    const allEmployee = await prisma.employee.findMany({
      skip: skip,
      take: limit,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        salary: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({ allEmployee });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};

//! get Single Employee
export const getSingleEmployee = async (req, res) => {
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id: req.params.id,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        salary: true,
        createdAt: true,
        department: {
          select: {
            name: true,
          },
        },
        role: {
          select: {
            name: true,
          },
        },
      },
    });

    res.status(200).json({ employee });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};

//! delete Single Employee
export const deleteSingleEmployee = async (req, res) => {
  try {
    const isEmployee = await prisma.employee.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!!isEmployee === false) {
      return res.status(200).json({ message: "Employee not exists." });
    }

    await prisma.employee.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: "Employee delete successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};

//! update Single Employee
export const updateRoleEmployee = async (req, res) => {
  try {
    let { firstName, lastName, email, phone, salary, departmentId, roleId } =
      req.body;

    // step 1 - check employee id exists
    const isEmployeeId = await prisma.employee.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!!isEmployeeId === false) {
      return res.status(200).json({ message: "Employee not found." });
    }

    // step 2 - check if employee name exists
    const isEmployee = await prisma.employee.findUnique({
      where: {
        email,
      },
    });

    if (!!isEmployee === true) {
      return res.status(409).json({ message: "Employee already exists" });
    }

    // step 3 - update role
    const role = await prisma.employee.update({
      where: {
        id: req.params.id,
      },

      data: {
        firstName,
        lastName,
        email,
        phone,
        salary,
        departmentId,
        roleId,
      },
    });

    res.status(200).json({ message: "Employee update successfully.", role });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};
