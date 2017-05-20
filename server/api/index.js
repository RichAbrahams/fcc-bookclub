// modules

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');

// user routes

const verifyToken = require('./verifyToken'); // eslint-disable-line
const verifyPassword = require('./verifyPassword'); // eslint-disable-line
const verifyResetToken = require('./verifyResetToken'); // eslint-disable-line
const createUser = require('./createUser');
const signIn = require('./signIn');
const resetPassword = require('./resetPassword');
const updateProfile = require('./updateProfile');
const updatePassword = require('./updatePassword');
const sendResetEmail = require('./sendResetEmail');
const retrieveUser = require('./retrieveUser');
const deleteBook = require('./deleteBook');
// app routes

const retrieveAvailableBooks = require('./retrieveAvailableBooks');
const requestTrade = require('./requestTrade');
const retrieveUserBooks = require('./retrieveUserBooks');
const addBook = require('./addBook');
const retrieveUserTrades = require('./retrieveUserTrades');
const cancelRequest = require('./cancelRequest');
const approveRequest = require('./approveRequest');
const declineRequest = require('./declineRequest');
const bookReturned = require('./bookReturned');

// passport schemas

const authorizeToken = passport.authenticate('verifyToken', { session: false });
const authorizePassword = passport.authenticate('verifyPassword', { session: false });
const authorizeResetToken = passport.authenticate('verifyResetToken', { session: false });

// routes

router.use(bodyParser.json({
  type: '*/*',
}));

router.get('/retrieveuser', authorizeToken, retrieveUser);

router.get('/retrieveavailablebooks', retrieveAvailableBooks);

router.get('/retrieveuserbooks', authorizeToken, retrieveUserBooks);

router.get('/retrieveusertrades', authorizeToken, retrieveUserTrades);

router.post('/signin', authorizePassword, signIn);

router.post('/signup', createUser);

router.post('/updateprofile', authorizeToken, updateProfile);

router.post('/updatepassword', authorizeToken, updatePassword);

router.post('/sendresetemail', sendResetEmail);

router.post('/resetpassword', authorizeResetToken, resetPassword);

router.post('/requesttrade', authorizeToken, requestTrade);

router.post('/sendresetemail', sendResetEmail);

router.post('/resetpassword', authorizeResetToken, resetPassword);

router.post('/deletebook', authorizeToken, deleteBook);

router.post('/addbook', authorizeToken, addBook);

router.post('/cancelrequest', authorizeToken, cancelRequest);

router.post('/approverequest', authorizeToken, approveRequest);

router.post('/declinerequest', authorizeToken, declineRequest);

router.post('/bookreturned', authorizeToken, bookReturned);

router.use((err, req, res, next) => {  // eslint-disable-line
  res.status(500).json({ success: false, error: { _error: 'server error, please retry later' } });
});

module.exports = router;
