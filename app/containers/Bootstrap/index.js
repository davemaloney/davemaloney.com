/**
 *
 * Bootstrap
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Alert } from 'reactstrap';

import NavBarContainer from '../NavBarContainer';
import Footer from '../../components/Footer';
import PageOne from '../PageOne';
import PageTwo from '../PageTwo';
import PageThree from '../PageThree';

// export class Bootstrap extends React.Component {
//   static propTypes = {
//     children: PropTypes.element,
//   };

//   render() {
const Bootstrap = (props) => {
  if (
    !!navigator.userAgent.match(/Trident/g) ||
    !!navigator.userAgent.match(/MSIE/g)
  ) {
    return (
      <div className="container">
        <Alert color="warning" className="text-center">
          Sorry, this part of the site is really not meant to be used with
          Internet Explorer.
        </Alert>
      </div>
    );
  }
  return (
    <div>
      <NavBarContainer {...props} />
      <Switch>
        <Route path="/tagmanagerdemo" exact component={PageOne} />
        <Route path="/tagmanagerdemo/2" component={PageTwo} />
        <Route path="/tagmanagerdemo/3" component={PageThree} />
      </Switch>
      {props.children}
      <Footer />
    </div>
  );
};
// }

Bootstrap.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  children: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default compose(withConnect)(Bootstrap);
