/* eslint consistent-return:0 */

module.exports = async (req, res, next) => {
  const col = req.db.collection('books');
  try {
    const books = await col
      .find({ $and: [{ requested_by: { $exists: false } }, { loaned_to: { $exists: false } }] })
      .toArray();
    res.json({ success: true, books });
  } catch (err) {
    return next({ err: true });
  }
};

