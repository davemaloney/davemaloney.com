/**
 *
 * Featurette
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import styles from './styles.less';

function Featurette(props) {
  return (
    <div className="container">
      <div className={styles.featurette}>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className={styles.featuretteHeading}>{props.title}</h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://via.placeholder.com/500x500"
              alt="Generic placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Featurette.propTypes = {
  title: PropTypes.string,
};

export default Featurette;
