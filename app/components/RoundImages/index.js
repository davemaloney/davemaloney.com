/**
 *
 * RoundImages
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './styles.less';

function RoundImages(props) {
  return (
    <div className="container">
      <div className={`text-center ${styles.roundImages}`}>
        <div className="row">
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder"
              width="140"
              height="140"
            />
            <h2>{props.title}</h2>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
            <p>
              <Link className="btn btn-secondary" to="#app" role="button">
                {props.title} &raquo;
              </Link>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder"
              width="140"
              height="140"
            />
            <h2>{props.title}</h2>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh.
            </p>
            <p>
              <Link className="btn btn-secondary" to="#app" role="button">
                {props.title} &raquo;
              </Link>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder"
              width="140"
              height="140"
            />
            <h2>{props.title}</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              <Link className="btn btn-secondary" to="#app" role="button">
                {props.title} &raquo;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

RoundImages.propTypes = {
  title: PropTypes.string,
};

export default RoundImages;
