/**
 *
 * PageThree
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPageThree from './selectors';
import reducer from './reducer';
import saga from './saga';

import Jumbotron from '../../components/Jumbotron';
import Featurette from '../../components/Featurette';
import RoundImages from '../../components/RoundImages';

function PageThree() {
  return (
    <div>
      <Featurette title="Page Three" />
      <RoundImages title="Page Three" />
      <Jumbotron title="Page Three" />
    </div>
  );
}

PageThree.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectPageThree();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'pageThree', reducer });
const withSaga = injectSaga({ key: 'pageThree', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(PageThree);
