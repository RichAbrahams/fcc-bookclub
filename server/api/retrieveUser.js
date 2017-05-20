
module.exports = async (req, res) => {
  const user = {
    username: req.user.username,
    email: req.user.email,
    city: req.user.city,
    state: req.user.state,
  };
  res.json({ success: true, user });
};
