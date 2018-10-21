
import { fromJS } from 'immutable';
import loginContainerReducer from '../reducer';

describe('loginContainerReducer', () => {
  it('returns the initial state', () => {
    expect(loginContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
