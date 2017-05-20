/* eslint consistent-return:0 */
/* eslint no-underscore-dangle:0 */

const ObjectID = require('mongodb').ObjectID;

module.exports = async (req, res, next) => {
  try {
    const col = req.db.collection('books');
    const book = await col.findOneAndUpdate(
      { $and: [
        { _id: new ObjectID(req.body._id) },
        { requested_by: { $exists: true } },
      ] },
      { $unset: { requested_by: '', requested_email: '' },
        $set: { loaned_to: req.body.requested_by, loaned_email: req.body.requested_email } },
      { returnOriginal: false }
      );
    res.json({ success: true, book: book.value });
  } catch (err) {
    return next({ err });
  }
};
