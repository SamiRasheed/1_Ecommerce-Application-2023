// we create two columns 1st wala password ko # krnay k liay or 2nd wala compare  kr k dcrypt krnay k liay
import bcrypt from "bcrypt";

// 1st function
export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};
// 2nd function
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
// before authController
