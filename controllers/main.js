const jwt = require("jsonwebtoken");

const {BadRequstError} = require("../errors/index");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequstError("Please provide email and password");
  } else {
    const id = new Date().getDate();
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(200).json({ message: `Welcome ${username}`, token });
  }
};

const dashboard = async (req, res) => {
  const randomNum = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({
      msg: `Hallo ${req.user.username} `,
      secret: `The random number is: ${randomNum}`,
    });
};

module.exports = {
  login,
  dashboard,
};
