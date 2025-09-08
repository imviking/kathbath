const { authenticateUser } = require("../services/authentication/authService");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await authenticateUser(email, password);

    // store in session
    req.session.user = user;

    return res.status(200).json(user);
  } catch (err) {
    console.error("❌ Login error:", err.message);
    return res.status(401).json({ error: err.message });
  }
};

module.exports = { login };
