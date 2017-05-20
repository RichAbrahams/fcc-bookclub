const bcrypt = require('bcrypt-nodejs');

module.exports = (password) => new Promise((resolve, reject) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      reject(err);
    }
    bcrypt.hash(password, salt, null, (er, hash) => {
      if (er) {
        reject(err);
      }
      resolve(hash);
    });
  });
});
