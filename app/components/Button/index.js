/**
*
* Button
*
*/

import React from 'react';

import PropTypes from 'prop-types';

import styles from './styles.less';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function Button({ type, text, link }) {
  return (
    <div className={styles.buttonWrapper}>
      {/* <FormattedMessage {...messages.header} /> */}
      <a className={type} href={link}>{text}</a>
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
