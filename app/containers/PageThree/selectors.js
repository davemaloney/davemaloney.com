import { createSelector } from 'reselect';

/**
 * Direct selector to the pageThree state domain
 */
const selectPageThreeDomain = (state) => state.get('pageThree');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PageThree
 */

const makeSelectPageThree = () => createSelector(
  selectPageThreeDomain,
  (substate) => substate.toJS()
);

export default makeSelectPageThree;
export {
  selectPageThreeDomain,
};
