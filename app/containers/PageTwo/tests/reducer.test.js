
import { fromJS } from 'immutable';
import pageTwoReducer from '../reducer';

describe('pageTwoReducer', () => {
  it('returns the initial state', () => {
    expect(pageTwoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
