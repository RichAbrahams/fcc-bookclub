/* eslint consistent-return:0 */

const ObjectID = require('mongodb').ObjectID;

module.exports = async (req, res, next) => {
  try {
    const col = req.db.collection('books');
    await col.findOneAndUpdate(
      { $and: [
        { _id: new ObjectID(req.body.id) },
        { requested_by: { $exists: true } },
      ] },
      { $unset: { requested_by: '', requested_email: '' } },
      { returnOriginal: false }
      );
    res.json({ success: true, book: req.body.id });
  } catch (err) {
    return next({ err });
  }
};
