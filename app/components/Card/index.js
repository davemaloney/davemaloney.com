/**
 *
 * Card
 *
 */

import React from 'react';
// import styled from 'styled-components';

import PropTypes from 'prop-types';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const CardModel = (props) => (
  <Card>
    {props.image ? (
      <CardImg top width="100%" src={props.image} alt={props.title} />
    ) : (
      ''
    )}
    <CardBody>
      {props.title ? <CardTitle>{props.title}</CardTitle> : ''}
      {props.subtitle ? <CardSubtitle>{props.subtitle}</CardSubtitle> : ''}
      {props.text ? <CardText>{props.text}</CardText> : ''}
      {props.link ? (
        <Button color="danger">
          {props.linkText ? props.linkText : 'Learn more'}
        </Button>
      ) : (
        ''
      )}
    </CardBody>
  </Card>
);

CardModel.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  image: PropTypes.string,
};

export default CardModel;
