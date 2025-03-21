import prisma from "../../config/db.js";

export const fileUpload = async (req, res) => {
  try {
    let file = await prisma.file.create({
      data: {
        path: req?.file?.filename,
      },
    });
    res
      .status(201)
      .json({ success: true, message: "FileUploads successfully", file });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error File Uploads", error: error.toString() });
  }
};

export const getAllFile = async (req, res) => {
  try {
    const files = await prisma.file.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        path: true,
      },
    });
    res.status(200).json({ success: true, files });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching files",
      error: error.toString(),
    });
  }
};

export const fileDelete = async (req, res) => {
  try {
    const isFile = await prisma.file.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!!isFile === false) {
      return res
        .status(200)
        .json({ success: false, message: "File not exists." });
    }

    await prisma.file.delete({
      where: {
        id: req.params.id,
      },
    });

    res
      .status(200)
      .json({ success: true, message: "File delete successfully." });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.toString(),
    });
  }
};
