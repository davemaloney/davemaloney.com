
import { fromJS } from 'immutable';
import pageThreeReducer from '../reducer';

describe('pageThreeReducer', () => {
  it('returns the initial state', () => {
    expect(pageThreeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
