/* eslint consistent-return: 0 */

const hash = require('./hashPassword');
const generateToken = require('./generateToken');

module.exports = async (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const city = req.body.city;
  const state = req.body.state;
  const password = req.body.password;
  const col = req.db.collection('users');
  try {
    const findUser = await col
      .find({ username })
      .toArray();
    if (findUser.length) {
      return res
        .status(422)
        .json({ error: 'user already exists' });
    }
    const findEmail = await col
      .find({ email })
      .toArray();
    if (findEmail.length) {
      return res
        .status(422)
        .json({ error: 'email already exists' });
    }
    const hashedPassword = await hash(password);
    await col.insertOne({ username, email, city, state, password: hashedPassword });
    res.json({ success: true, email, username, city, state, token: generateToken(username) });
  } catch (err) {
    return next({ err: true });
  }
};
