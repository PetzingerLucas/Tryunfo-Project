import React from 'react';
import './Form.css';
import propTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo,
      onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <form action="">
        <label htmlFor="name-input">
          Nome:
          <input
            placeholder="Digite o nome da carta"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            id="name-input"
            data-testid="name-input"
            type="text"
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <textarea
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            id="description-input"
            data-testid="description-input"
            type="textarea"
          />

        </label>

        <label htmlFor="attr1-input">
          Poder de Habilidade:
          <input
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attr1-input"
            data-testid="attr1-input"
            type="number"
            min="0"
          />

        </label>

        <label htmlFor="attr2-input">
          Dano Físico:
          <input
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attr2-input"
            data-testid="attr2-input"
            type="number"
            min="0"
          />

        </label>

        <label htmlFor="attr3-input">
          Vida:
          <input
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attr3-input"
            data-testid="attr3-input"
            type="number"
            min="0"
          />

        </label>

        <label htmlFor="image-input">
          Imagem:
          <input
            placeholder="Digite endereço da imagem"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            id="image-input"
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            id="rare-input"
            data-testid="rare-input"
          >
            Raridade:
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        {
          !hasTrunfo ? (
            <label htmlFor="trunfo-input">
              <input
                checked={ cardTrunfo }
                onChange={ onInputChange }
                type="checkbox"
                name="cardTrunfo"
                id="trunfo-input"
                data-testid="trunfo-input"
              />
              Super Trybe Trunfo!
            </label>
          ) : (
            <h4>Você já tem um Super Trunfo em seu baralho</h4>
          )
        }
        <button
          className="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          type="submit"
        >
          Salvar

        </button>
      </form>

    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};
export default Form;
