const bcrypt = require("bcrypt");
const { getUserByEmail } = require("../../dao/user");

const authenticateUser = async (email, password) => {
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  // return only safe fields
  return {
    id: user._id,
    fullName: user.fullName,
    email: user.email
  };
};

module.exports = { authenticateUser };
