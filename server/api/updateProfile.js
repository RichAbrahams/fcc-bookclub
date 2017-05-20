/* eslint consistent-return:0 */

module.exports = async (req, res, next) => {
  const email = req.body.email.toLowerCase();
  const city = req.body.city.toLowerCase();
  const state = req.body.state.toLowerCase();
  try {
    const col = req.db.collection('users');
    await col.updateOne(
      { _id: req.user._id }, //eslint-disable-line
      { $set: { email, city, state } });
    res.json({
      email,
      city,
      state,
    });
  } catch (err) {
    return next({ err: true });
  }
};
