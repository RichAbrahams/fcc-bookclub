/* eslint consistent-return:0 */

module.exports = async (req, res, next) => {
  const col = req.db.collection('books');
  const user = req.user.username;
  try {
    const books = await col
      .find({ $or: [
    { $and: [{ owner: user }, { requested_by: { $exists: true } }] },
    { $and: [{ owner: user }, { loaned_to: { $exists: true } }] },
    { $or: [{ requested_by: user }, { loaned_to: user }] },
      ] })
      .toArray();
    res.json({ success: true, books });
  } catch (err) {
    return next({ err: true });
  }
};
