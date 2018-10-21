/**
 *
 * PageOne
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { compose } from 'redux';

// import injectReducer from 'utils/injectReducer';
// import makeSelectPageOne from './selectors';
// import reducer from './reducer';

import Carousel from '../../components/Carousel';
import Triplet from '../../components/Triplet';
import Featurette from '../../components/Featurette';
import RoundImages from '../../components/RoundImages';

const Cards = {
  rowSize: 4,
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
const Slides = [
  {
    src:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
];
function PageOne(props) {
  return (
    <div>
      <Carousel {...props}>{Slides}</Carousel>
      <Triplet {...props}>{Cards}</Triplet>
      <Featurette title="Page One" />
      <RoundImages title="Page One" />
    </div>
  );
}

PageOne.propTypes = {
  // dispatch: PropTypes.func, // .isRequired,
};

// const mapStateToProps = makeSelectPageOne();

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps
// );

// const withReducer = injectReducer({ key: 'pageOne', reducer });
// const withSaga = injectSaga({ key: 'pageone', saga });

export default compose()(PageOne);
// withReducer,
// withSaga,
// withConnect
