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

//! get Single Role
export const getSingleRole = async (req, res) => {
  try {
    const role = await prisma.role.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ role });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
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
      return res.status(200).json({ message: "Role not exists." });
    }

    await prisma.role.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: "Role delete successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
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
      return res.status(200).json({ message: "Role not found." });
    }

    // step 2 - check if role name exists
    const isRole = await prisma.role.findUnique({
      where: {
        name,
      },
    });

    if (!!isRole === true) {
      return res.status(409).json({ message: "Role already exists" });
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

    res.status(200).json({ message: "Role update successfully.", role });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};
