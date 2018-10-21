/**
 *
 * Jumbotron
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';

import { Button } from 'reactstrap';

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">{props.title}</h1>
        <p>
          This is a template for a simple marketing or informational website. It
          includes a large callout called a jumbotron and three supporting
          pieces of content. Use it as a starting point to create something more
          unique.
        </p>
        <p>
          <Button className="btn btn-primary btn-lg" href="./">
            Learn more &raquo;
          </Button>
        </p>
      </div>
    </div>
  );
}

Jumbotron.propTypes = {
  title: PropTypes.string,
};

export default Jumbotron;
