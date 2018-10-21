/**
 *
 * PageTwo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPageTwo from './selectors';
import reducer from './reducer';
import saga from './saga';

import Jumbotron from '../../components/Jumbotron';
import Triplet from '../../components/Triplet';
import Featurette from '../../components/Featurette';
import RoundImages from '../../components/RoundImages';

const Cards = {
  rowSize: 3,
  content: [
    {
      title: 'Title 1',
      key: 'dljkafnvleajnvnlnv',
      subtitle: 'I like this card.',
      text:
        'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      link: '#',
      linkText: 'Link text',
      // image: 'https://placeholdit.imgix.net/~text?txt=1600%C3%97900&w=1600&h=900',
    },
    {
      title: 'Title 2',
      key: 'fjnviljsdnfvi',
      subtitle: 'I don\u2019t like this card.',
      text:
        'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      link: '#',
      linkText: 'Link text',
      // image: 'https://placeholdit.imgix.net/~text?txt=1600%C3%97900&w=1600&h=900',
    },
    {
      title: 'Title 3',
      key: 'afjnvifnvlsdcnvl',
      subtitle: 'I don\u2019t like this card.',
      text:
        'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      link: '#',
      linkText: 'Link text',
      // image: 'https://placeholdit.imgix.net/~text?txt=1600%C3%97900&w=1600&h=900',
    },
    {
      title: 'Title 4',
      key: 'adjnvifjanviuen',
      subtitle: 'I don\u2019t like this card.',
      text:
        'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      link: '#',
      linkText: 'Link text',
      // image: 'https://placeholdit.imgix.net/~text?txt=1600%C3%97900&w=1600&h=900',
    },
    {
      title: 'Title 5',
      key: 'ljfnvefnvlvn',
      subtitle: 'I don\u2019t like this card.',
      text:
        'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      link: '#',
      linkText: 'Link text',
      // image: 'https://placeholdit.imgix.net/~text?txt=1600%C3%97900&w=1600&h=900',
    },
    {
      title: 'Title 6',
      key: 'nnbviufnvnodnv',
      subtitle: 'I don\u2019t like this card.',
      text:
        'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      link: '#',
      linkText: 'Link text',
      // image: 'https://placeholdit.imgix.net/~text?txt=1600%C3%97900&w=1600&h=900',
    },
    {
      title: 'Title 7',
      key: ';anvreonvoidnv',
      subtitle: 'I don\u2019t like this card.',
      text:
        'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      link: '#',
      linkText: 'Link text',
      // image: 'https://placeholdit.imgix.net/~text?txt=1600%C3%97900&w=1600&h=900',
    },
  ],
};

function PageTwo() {
  return (
    <div>
      <Jumbotron title="Page Two" />
      <Triplet>{Cards}</Triplet>
      <Featurette title="Page Two" />
      <RoundImages title="Page Two" />
    </div>
  );
}

PageTwo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectPageTwo();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'pageTwo', reducer });
const withSaga = injectSaga({ key: 'pageTwo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(PageTwo);
