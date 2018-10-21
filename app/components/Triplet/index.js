/**
 *
 * Triplet
 *
 */

import React from 'react';

import PropTypes from 'prop-types';
import { CardDeck } from 'reactstrap';
import CardModel from '../Card';

import styles from './styles.less';

function Triplet(props) {
  // Simple method to split into groups with a remainder.
  // Taken from https://gist.github.com/webinista/11240585
  //
  // const chunk = (arr, size) =>
  //   arr.reduce(
  //     (chunks, el, i) =>
  //       (i % size ? chunks[chunks.length - 1].push(el) : chunks.push([el])) &&
  //       chunks,
  //     []
  //   );

  // Method to split array into balanced groups.
  // Built off of an idea taken from http://jsfiddle.net/ht22q/
  // Found via https://stackoverflow.com/questions/8188548/splitting-a-js-array-into-n-arrays)
  // Modified to ensure that if there's an uneven row, it's always at the top, or the top and bottom.
  //
  const splitUp = (arr, size) => {
    const subGroups = Math.ceil(arr.length / size);
    const rest = arr.length % subGroups;
    let restUsed = rest;
    const partLength = Math.floor(arr.length / subGroups);
    const result = [];

    for (let i = 0; i < arr.length; i += partLength) {
      if (i === 0 && partLength === size - 1) {
        result.push(arr.slice(0, size - 1));
        i = size - 1;
        if (i >= arr.length) break;
      }
      let end = partLength + i;
      let add = false;

      if (rest !== 0 && restUsed) {
        end += 1;
        restUsed -= 1;
        add = true;
      }

      result.push(arr.slice(i, end));

      if (add) {
        i += 1;
      }
    }
    return result;
  };

  const groups = splitUp(props.children.content, props.children.rowSize);

  // With help from https://stackoverflow.com/questions/35249979/how-do-i-iterate-nested-arrays-in-a-react-component
  const CardDecks = groups.map((decks) => {
    const CardItems = decks.map((child) => (
      <CardModel
        key={child.key}
        title={child.title}
        subtitle={child.subtitle}
        text={child.text}
        link={child.link}
        linkText={child.linkText}
        image={child.image}
      />
    ));

    return (
      <CardDeck className={styles.cardDeck} key={`${decks[0].key}-deck`}>
        {CardItems}
      </CardDeck>
    );
  });

  return <div className="container">{CardDecks}</div>;
}

Triplet.propTypes = {
  children: PropTypes.shape({
    rowSize: PropTypes.number.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        key: PropTypes.string,
        subtitle: PropTypes.string,
        text: PropTypes.string,
        link: PropTypes.string,
        linkText: PropTypes.string,
        image: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default Triplet;
