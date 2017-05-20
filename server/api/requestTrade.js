/* eslint consistent-return:0 */

const ObjectID = require('mongodb').ObjectID;

module.exports = async (req, res, next) => {
  try {
    const col = req.db.collection('books');
    const updatedBook = await col.findOneAndUpdate(
      { $and: [
        { _id: new ObjectID(req.body.id) },
        { requested_by: { $exists: false } },
        { loaned_to: { $exists: false } },
      ] },
      { $set: { requested_by: req.user.username, requested_email: req.user.email } },
      { returnOriginal: false }
      );
    res.json({ success: true, book: updatedBook.value });
  } catch (err) {
    return next({ err });
  }
};
