import React from 'react';
import PropTypes from 'prop-types';
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import styles from './styles.less';

function LoginButton({ authProvider }) {
  return (
    // <DropdownItem href={`/auth/${authProvider.toLowerCase()}`}>Log in with {authProvider}</DropdownItem>
    <li>
      <a href={`/auth/${authProvider.toLowerCase()}`}>
        Log in with {authProvider}
      </a>
    </li>
  );
}

// export default class Login extends React.Component {
// constructor(props) {
//   super(props);

//   this.toggle = this.toggle.bind(this);
//   this.state = {
//     dropdownOpen: false,
//   };
// }

// toggle() {
//   this.setState({
//     dropdownOpen: !this.state.dropdownOpen,
//   });
// }

// render() {
function Login(user, authenticated, logout, cancelLogin) {
  return (
    <div className={styles.wrapper}>
      {authenticated ? (
        <div className={styles.welcome}>
          <div>Welcome, {user.displayName}</div>
          <div>
            <a href="/auth/logout" onClick={() => logout()}>
              log out
            </a>
          </div>
        </div>
      ) : (
        <div className={styles.login}>
          {/* <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Log In
              </DropdownToggle>
              <DropdownMenu> */}
          <ul>
            <LoginButton authProvider="Google" />
            <LoginButton authProvider="Facebook" />
            <LoginButton authProvider="LinkedIn" />
            <LoginButton authProvider="Twitter" />
            <LoginButton authProvider="GitHub" />
            <li>
              <a href={cancelLogin}>Cancel</a>
            </li>
          </ul>
          {/* </DropdownMenu>
            </ButtonDropdown> */}
        </div>
      )}
    </div>
  );
}
// }

LoginButton.propTypes = {
  authProvider: PropTypes.string.isRequired,
};

Login.propTypes = {
  logout: PropTypes.func.isRequired,
  cancelLogin: PropTypes.func,
  authenticated: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

// ButtonDropdown.propTypes = {
//   disabled: PropTypes.bool,
//   direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
//   group: PropTypes.bool,
//   isOpen: PropTypes.bool,
//   tag: PropTypes.string,
//   toggle: PropTypes.func,
// };

// DropdownToggle.propTypes = {
//   caret: PropTypes.bool,
//   color: PropTypes.string,
//   disabled: PropTypes.bool,
//   onClick: PropTypes.func,
//   'data-toggle': PropTypes.string,
//   'aria-haspopup': PropTypes.bool,
// };
