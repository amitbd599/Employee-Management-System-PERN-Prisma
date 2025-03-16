import prisma from "../../config/db.js";

//! create User
export const createUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    const isUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!!isUser === true) {
      return res.status(409).json({ message: "Email already exists" });
    }

    let user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating employee", error: error.toString() });
  }
};

//! get All User
export const getAllUser = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    res.status(200).json({ allUsers });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};

//! get Single User
export const getSingleUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
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

//! update Single User
export const updateSingleUser = async (req, res) => {
  try {
    let { name, email, password, role } = req.body;
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },

      data: {
        name,
        email,
        password,
        role,
      },
    });

    res.status(200).json({ message: "User update successfully.", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.toString() });
  }
};
