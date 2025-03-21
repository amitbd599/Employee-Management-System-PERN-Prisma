import prisma from "../../config/db.js";

export const fileUpload = async (req, res) => {
  console.log(req.file.filename);

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
