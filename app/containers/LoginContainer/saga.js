/* eslint no-underscore-dangle: 0 */

// import { take, call, put, select } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';

import {
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
} from './actions';
import { LOGIN, LOGOUT, CANCEL_LOGIN } from './constants';

function* cancelLogin() {
  yield put(goBack());
}

function fetchUserfromServer() {
  return fetch('./auth/user', {
    credentials: 'include',
    method: 'POST',
  })
    .then((response) => response.json())
    .catch((error) => {
      throw Error(error);
    });
}

function* login() {
  try {
    const user = yield call(fetchUserfromServer);
    if (user._id) {
      yield put(loginSuccess(user));
    } else {
      throw new Error('no user._id');
    }
  } catch (e) {
    yield put(loginError(e.message));
  }
}

function* logout() {
  fetch('./auth/logout', { credentials: 'include' });
  try {
    const user = yield call(fetchUserfromServer);
    if (!user.id) {
      yield put(logoutSuccess(user));
    } else {
      throw new Error('logout unsuccessful');
    }
  } catch (e) {
    yield put(logoutError(e.message));
  }
}

export default function* rootSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield [
    takeLatest(LOGIN, login),
    takeLatest(LOGOUT, logout),
    takeLatest(CANCEL_LOGIN, cancelLogin),
  ];
}
