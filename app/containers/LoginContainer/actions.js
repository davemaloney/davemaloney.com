/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  CANCEL_LOGIN,
} from './constants';

export function login() {
  return {
    type: LOGIN,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginError() {
  return {
    type: LOGIN_ERROR,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function logoutSuccess(user) {
  return {
    type: LOGOUT_SUCCESS,
    user,
  };
}

export function logoutError() {
  return {
    type: LOGOUT_ERROR,
  };
}

export function cancelLogin() {
  return {
    type: CANCEL_LOGIN,
  };
}
