import jwt from "jsonwebtoken";

export const EncodeToken = (email, id) => {
  let key = process.env.JWT_KEY;
  let expire = process.env.JWT_Expire_Time;
  let payload = { email, id };
  console.log(payload);

  return jwt.sign(payload, key, { expiresIn: expire });
};
export const DecodeToken = (token) => {
  try {
    let key = process.env.JWT_KEY;
    let decoded = jwt.verify(token, key);
    return decoded;
  } catch (err) {
    return null;
  }
};
