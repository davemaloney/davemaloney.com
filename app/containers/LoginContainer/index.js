/**
 *
 * LoginContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

import Login from '../../components/Login';
import { login, logout, cancelLogin } from './actions';

export class LoginContainer extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    children: PropTypes.element,
  };

  componentWillMount() {
    this.props.login();
  }

  render() {
    return (
      <div>
        <Login {...this.props} />
        {this.props.children}
      </div>
    );
  }
}

LoginContainer.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectLoginContainer();

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    cancelLogin: () => dispatch(cancelLogin()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'loginContainer', reducer });
const withSaga = injectSaga({ key: 'loginContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(LoginContainer);
