/* eslint consistent-return:0 */

module.exports = async (req, res, next) => {
  const thumbnail = req.body.thumbnail.replace(/^http:\/\//i, 'https://');
  const book = Object.assign({}, req.body, { owner: req.user.username, thumbnail });
  const col = req.db.collection('books');
  try {
    await col.insertOne(book);
    res.json({ success: true, book });
  } catch (err) {
    return next({ err: true });
  }
};
