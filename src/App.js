import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.resetStates = this.resetStates.bind(this);
    this.superTrunfoValidation = this.superTrunfoValidation.bind(this);
    this.deleteFunction = this.deleteFunction.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: true,
      isSaveButtonDisabled: true,
      savedCards: [{
        cardAttr1: '90',
        cardAttr2: '90',
        cardAttr3:
        '30',
        cardDescription:
         `O Alistar Negro, por exemplo, foi 
         parte de uma promoção de pré-
         venda digital realizada em 2009, o
         que o tornou muito cobiçado até hoje,`,
        cardImage:
        'https://i.imgur.com/bGtLXgi.jpeg',
        cardName:
        'Black Alistar',
        cardRare:
        'Muito raro',
        cardTrunfo: true,
      }],
    };
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;
    const card = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    this.setState((state) => ({ savedCards: [...state.savedCards, card] }),
      () => { this.resetStates(); });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,

    }, () => {
      const { cardName, cardDescription, cardImage, cardRare, cardAttr1,
        cardAttr2,
        cardAttr3 } = this.state;

      const emptyString = cardName && cardDescription && cardImage && cardRare !== '';
      const maxSumAtrr = 210;
      const maxAtrr = 90;
      const minAtrr = 0;
      const sumAtrr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const sumValidation = sumAtrr <= maxSumAtrr;
      const atrrValidation = Number(cardAttr1) <= maxAtrr
      && Number(cardAttr2) <= maxAtrr && Number(cardAttr3) <= maxAtrr;

      const overZero = Number(cardAttr1) >= minAtrr
      && Number(cardAttr2) >= minAtrr && Number(cardAttr3) >= minAtrr;

      const validationSucess = emptyString && sumValidation && atrrValidation && overZero;

      if (validationSucess) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  }

  resetStates() {
    const verify = this.superTrunfoValidation();
    this.setState({ cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: verify,
      isSaveButtonDisabled: true });
  }

  superTrunfoValidation() {
    const { savedCards } = this.state;
    const verify = savedCards.some((card) => card.cardTrunfo === true);
    return verify;
  }

  deleteFunction({ target }) {
    const { savedCards } = this.state;
    const newSavedCards = savedCards.filter((cards) => cards.cardName !== target.id);
    this.setState({ savedCards: [...newSavedCards] }, () => { this.resetStates(); });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo, savedCards } = this.state;
    return (
      <>
        <h1>TRYUNFO</h1>
        <div className="main-container">

          <section className="form-render">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
              onInputChange={ this.onInputChange }
              hasTrunfo={ hasTrunfo }
            />
          </section>
          <section className="card-prev">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              onInputChange={ this.onInputChange }
            />
          </section>

        </div>

        <CardList
          resetStates={ this.resetStates }
          deleteFunction={ this.deleteFunction }
          myCards={ savedCards }
        />
      </>
    );
  }
}

export default App;
