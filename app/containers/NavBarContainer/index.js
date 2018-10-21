/**
 *
 * NavBarContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectNavBarContainer from './selectors';
import reducer from './reducer';

import NavBar from '../../components/NavBar';

// export class NavBarContainer extends React.Component {
//   static propTypes = {
//     children: PropTypes.element,
//   };

//   render() {
const NavBarContainer = (props) => (
  <div>
    <NavBar {...props}>{props.children}</NavBar>
  </div>
  );
// }

NavBarContainer.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  children: PropTypes.element,
};

const mapStateToProps = makeSelectNavBarContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'navBarContainer', reducer });

export default compose(
  withReducer,
  withConnect
)(NavBarContainer);
