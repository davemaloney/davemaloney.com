import { createSelector } from 'reselect';

/**
 * Direct selector to the navBarContainer state domain
 */
const selectNavBarContainerDomain = (state) => state.get('navBarContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavBarContainer
 */

const makeSelectNavBarContainer = () => createSelector(
  selectNavBarContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectNavBarContainer;
export {
  selectNavBarContainerDomain,
};
