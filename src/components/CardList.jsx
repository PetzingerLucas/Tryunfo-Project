import propTypes from 'prop-types';
import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { myCards, deleteFunction } = this.props;
    return (
      <div className="card-list">
        <h1 className="title">Suas cartas</h1>
        {myCards.map((card) => (
          <div className="card-container" key={ card.CardName }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare[0].toUpperCase() + card.cardRare.slice(1) }
              cardTrunfo={ card.cardTrunfo }
              hasTrunfo={ card.hasTrunfo }
            />
            <button
              id={ card.cardName }
              type="button"
              data-testid="delete-button"
              onClick={ deleteFunction }
            >
              Excluir

            </button>

          </div>))}

      </div>);
  }
}

CardList.propTypes = {
  deleteFunction: propTypes.func.isRequired,
  myCards: propTypes.arrayOf(propTypes.shape({ cardName: propTypes.string.isRequired,
    cardDescription: propTypes.string.isRequired,
    cardAttr1: propTypes.string.isRequired,
    cardAttr2: propTypes.string.isRequired,
    cardAttr3: propTypes.string.isRequired,
    cardImage: propTypes.string.isRequired,
    cardRare: propTypes.string.isRequired,
    cardTrunfo: propTypes.bool.isRequired })).isRequired,
};
export default CardList;
