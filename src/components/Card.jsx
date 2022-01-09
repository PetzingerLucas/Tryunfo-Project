import React from 'react';
import propTypes from 'prop-types';
import imgTeste from './Teste.png';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="card">
        <img className="img-background" src={ imgTeste } alt="" />
        <h3 data-testid="name-card">{cardName}</h3>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">

          {' '}
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          {' '}
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          {' '}
          {cardAttr3}
        </p>
        <h4 data-testid="rare-card">
          {cardRare[0]
            .toUpperCase() + cardRare.slice(1)}

        </h4>

        {cardTrunfo ? (
          <h3
            className="trunfo-text"
            data-testid="trunfo-card"
          >
            Super Trunfo!

          </h3>) : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};
export default Card;
