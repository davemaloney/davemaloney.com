/**
*
* HomeGrid
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.less';

function LetterBlock({ letter, color, image }) {
  return (
    <div className={styles.textWrap}>
      <div className={classnames(styles[color], styles[image])}>{letter}</div>
    </div>
  );
}

function HomeGrid() {
  return (
    <div className={styles.wrapper}>
      <LetterBlock letter="D" color="red" image="imageOne" />
      <LetterBlock letter="A" color="yellow" image="imageTwo" />
      <LetterBlock letter="V" color="blue" image="imageThree" />
      <LetterBlock letter="E" color="gray" image="imageFour" />
      <LetterBlock letter="M" color="green" image="imageFive" />
      <LetterBlock letter="A" color="blue" image="imageSix" />
      <LetterBlock letter="L" color="red" image="imageSeven" />
      <LetterBlock letter="O" color="yellow" image="imageEight" />
      <LetterBlock letter="N" color="green" image="imageNine" />
      <LetterBlock letter="E" color="gray" image="imageTen" />
      <LetterBlock letter="Y" color="green" image="imageEleven" />
      <LetterBlock letter="&bull;" color="blue" image="imageTwelve" />
      <LetterBlock letter="C" color="gray" image="imageThirteen" />
      <LetterBlock letter="O" color="red" image="imageFourteen" />
      <LetterBlock letter="M" color="yellow" image="imageFifteen" />
    </div>
  );
}

HomeGrid.propTypes = {

};

LetterBlock.propTypes = {
  letter: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
};

export default HomeGrid;
