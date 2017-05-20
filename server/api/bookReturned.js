/* eslint consistent-return:0 */

const ObjectID = require('mongodb').ObjectID;

module.exports = async (req, res, next) => {
  try {
    const col = req.db.collection('books');
    await col.findOneAndUpdate(
      { $and: [
        { _id: new ObjectID(req.body.id) },
        { loaned_to: { $exists: true } },
      ] },
      { $unset: { loaned_to: '', loaned_email: '' } },
      { returnOriginal: false }
      );
    res.json({ success: true, book: req.body.id });
  } catch (err) {
    return next({ err });
  }
};
