import { take, put, cancel, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import toastr from 'toastr';
import { SubmissionError } from 'redux-form/immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { RETRIEVE_MY_BOOKS, DELETE_MY_BOOK, SUBMIT_TITLE_SEARCH, ADD_BOOK } from './constants';
import { retrieveMyBooksSuccess, deleteMyBookSuccess, titleSearchSuccess, addBookSuccess } from './actions';
import { selectToken } from '../Header/selectors';


export function* retrieveUserBooksSaga() {
  try {
    const token = yield select(selectToken());
    const config = { headers: { authorization: token } };
    const requestURL = '/api/retrieveuserbooks';
    const request = yield axios.get(requestURL, config);
    if (request.data.success) {
      yield put(retrieveMyBooksSuccess(request.data.books));
    } else {
      toastr.warning('could not retrieve your books from server');
    }
  } catch (err) {
    toastr.error('sorry, an error occurred');
  }
}

export function* retrieveUserBooksWatcher() {
  const watcher = yield takeLatest(RETRIEVE_MY_BOOKS, retrieveUserBooksSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* deleteUserBookSaga(action) {
  try {
    const book = { id: action.payload };
    const token = yield select(selectToken());
    const config = { headers: { authorization: token } };
    const requestURL = '/api/deletebook';
    const request = yield axios.post(requestURL, book, config);
    if (request.data.success) {
      toastr.success('book deleted');
      yield put(deleteMyBookSuccess(request.data.id));
    } else {
      toastr.warning('unable to delete books');
    }
  } catch (err) {
    toastr.error('sorry, an error occurred');
  }
}

export function* deleteUserBookWatcher() {
  const watcher = yield takeLatest(DELETE_MY_BOOK, deleteUserBookSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* titleSearchSaga(action) {
  const { data, resolve, reject } = action.payload;
  try {
    const response = yield axios.get(`https://www.googleapis.com/books/v1/volumes?q=${data.toJS().title}`);
    if (response.data.items.length) {
      const books = response.data.items
        .map((book) => book.volumeInfo)
        .map((book) => {
          const obj = {};
          obj.title = book.title;
          obj.authors = book.authors ? book.authors.join(', ') : null;
          obj.thumbnail = book.imageLinks ? book.imageLinks.smallThumbnail : null;
          return obj;
        })
        .filter((book, index, arr) => arr.findIndex((b) => b.title === book.title && b.authors === book.authors) === index);
      yield put(titleSearchSuccess(books));
      resolve();
    } else reject(new SubmissionError({ _error: 'could not find any books with this title' }));
  } catch (err) {
    reject(new SubmissionError({ _error: 'an error occurred' }));
  }
}

export function* titleSearchSagaWatcher() {
  const watcher = yield takeLatest(SUBMIT_TITLE_SEARCH, titleSearchSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* addBookSaga(action) {
  try {
    const book = action.payload;
    const token = yield select(selectToken());
    const config = { headers: { authorization: token } };
    const requestURL = '/api/addbook';
    const request = yield axios.post(requestURL, book, config);
    toastr.success('book added');
    yield put(addBookSuccess(request.data.book));
  } catch (err) {
    toastr.error('sorry, an error occurred');
  }
}

export function* addBookSagaWatcher() {
  const watcher = yield takeLatest(ADD_BOOK, addBookSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  retrieveUserBooksWatcher,
  deleteUserBookWatcher,
  titleSearchSagaWatcher,
  addBookSagaWatcher,
];
