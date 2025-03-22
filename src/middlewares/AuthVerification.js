import { DecodeToken } from "../utility/TokenHelper.js";

export const AuthVerification = (req, res, next) => {
  let token = req.cookies["Token"];

  let decoded = DecodeToken(token);

  if (decoded === null) {
    return res.status(401).json({
      status: 401,
      message: "Invalid Token",
    });
  } else {
    req.headers.email = decoded["email"];
    req.headers.id = decoded["id"];
    next();
  }
};
