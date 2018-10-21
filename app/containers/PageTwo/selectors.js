import { createSelector } from 'reselect';

/**
 * Direct selector to the pageTwo state domain
 */
const selectPageTwoDomain = (state) => state.get('pageTwo');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PageTwo
 */

const makeSelectPageTwo = () => createSelector(
  selectPageTwoDomain,
  (substate) => substate.toJS()
);

export default makeSelectPageTwo;
export {
  selectPageTwoDomain,
};
