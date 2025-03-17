export const fileUpload = (req, res) => {
  try {
    res.status(200).json({
      status: true,
      file: req.file,
      msg: "FileUploads successfully",
    });
  } catch (e) {
    return { status: false, error: e };
  }
};
