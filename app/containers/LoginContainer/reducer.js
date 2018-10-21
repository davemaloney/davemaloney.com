/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from './constants';

const initialState = fromJS({
  isWaiting: false,
  authenticated: false,
  user: {},
});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('isWaiting', true);
    case LOGIN_SUCCESS:
      return state.set('isWaiting', false).set('authenticated', true).set('user', action.user);
    case LOGIN_ERROR:
      return state.set('isWaiting', false).set('authenticated', false);
    case LOGOUT:
      return state.set('isWaiting', true);
    case LOGOUT_SUCCESS:
      return state.set('isWaiting', false).set('authenticated', false).set('user', {});
    case LOGOUT_ERROR:
      return state.set('isWaiting', false);
    default:
      return state;
  }
}

export default loginContainerReducer;
