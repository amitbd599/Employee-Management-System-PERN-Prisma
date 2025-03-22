import prisma from "../../config/db.js";
import { EncodeToken } from "../utility/TokenHelper.js";

//! create User
export const createUser = async (req, res) => {
  try {
    let { name, email, img, password, role } = req.body;

    const isUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!!isUser === true) {
      return res
        .status(200)
        .json({ success: false, message: "Email already exists" });
    }

    let user = await prisma.user.create({
      data: {
        name,
        email,
        img,
        role,
        password,
      },
    });
    res
      .status(201)
      .json({ success: true, message: "User created successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating employee", error: error.toString() });
  }
};

//! user login

export const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });

    if (!!user === false) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid credentials" });
    }

    if (!!user === true) {
      let token = EncodeToken(user.email, user.id);

      let options = {
        maxAge: process.env.Cookie_Expire_Time,
        httpOnly: false,
        sameSite: "none",
        secure: true,
      };

      // Set cookie
      res.cookie("Token", token, options);
      res.status(200).json({
        success: true,
        message: "Login successful",
        user: {
          email: user.email,
          name: user.name,
          role: user.role,
        },
        token: token,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error logging in",
      error: error.toString(),
    });
  }
};

//! logout
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("Token");
    res.status(200).json({ success: true, message: "Logout successful" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error logging out",
      error: error.toString(),
    });
  }
};

//! get All User || remove
export const getAllUser = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        img: true,
        role: true,
        createdAt: true,
      },
    });

    res.status(200).json({ success: true, allUsers });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.toString(),
    });
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

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.toString(),
    });
  }
};

//! get User by role || remove
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

//! delete Single User || remove
export const deleteSingleUser = async (req, res) => {
  try {
    const isUser = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!!isUser === false) {
      return res
        .status(200)
        .json({ success: false, message: "User not exists" });
    }

    await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });

    res
      .status(200)
      .json({ success: true, message: "User delete successfully." });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.toString(),
    });
  }
};

//! update Single User
export const updateSingleUser = async (req, res) => {
  try {
    let { name, password, role } = req.body;

    // step 1: check if user id exists
    const isUserId = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!!isUserId === false) {
      return res.status(200).json({ message: "User not exists." });
    }

    // step 2: update user
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },

      data: {
        name,
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
