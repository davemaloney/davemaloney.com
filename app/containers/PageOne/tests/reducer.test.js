
import { fromJS } from 'immutable';
import pageOneReducer from '../reducer';

describe('pageOneReducer', () => {
  it('returns the initial state', () => {
    expect(pageOneReducer(undefined, {})).toEqual(fromJS({}));
  });
});
