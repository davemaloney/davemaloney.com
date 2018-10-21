import { createSelector } from 'reselect';

/**
 * Direct selector to the pageOne state domain
 */
const selectPageOneDomain = (state) => state.get('pageOne');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PageOne
 */

const makeSelectPageOne = () => createSelector(
  selectPageOneDomain,
  (substate) => substate.toJS()
);

export default makeSelectPageOne;
export {
  selectPageOneDomain,
};
