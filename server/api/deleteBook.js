/* eslint consistent-return:0 */

const ObjectID = require('mongodb').ObjectID;

module.exports = async (req, res, next) => {
  const col = req.db.collection('books');
  try {
    await col.deleteOne(
      { _id: new ObjectID(req.body.id) },
      { returnOriginal: false });
    res.json({ success: true, id: req.body.id });
  } catch (err) {
    return next({ err: true });
  }
};
