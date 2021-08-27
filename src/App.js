import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import faker from 'faker'
import { ThemeProvider } from 'styled-components'
import Button from './components/Button'
import Theme from './components/Theme'

class App extends Component {
  // init
  constructor(props) {
    super(props)

    const cardsSize = 3
    
    this.state = {
      cards: Array(cardsSize).fill(0).map(_ => this.cardGenerator()),
      showCard: true
    }
  }
  // functions
  cardGenerator = () => ({
    id: `${faker.name.firstName()}_${faker.name.lastName()}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    title: faker.name.jobTitle(),
    avatar: faker.image.avatar(),
  })
  changeNameHandler = (event, cardId) => {
    // which card
    const index = this.state.cards.findIndex(card => card.id === cardId)
    // copy
    var cards_copy = [...this.state.cards]
    // change the name of specific card
    cards_copy[index].name = event.target.value
    this.setState({ cards: cards_copy })
  }
  toogleShowCard = _ => this.setState({ showCard: !this.state.showCard })
  deleteCardHandler = cardIdToDelete => {
    var cards_copy = [...this.state.cards]
    cards_copy = cards_copy.filter(card => card.id !== cardIdToDelete)
    this.setState({ cards: cards_copy })
  }
  addCardHandler = _ => { this.setState({ cards:[...this.state.cards, this.cardGenerator()]})}

  // logic
  render() {
    const cardsMarkup = this.state.showCard && this.state.cards.map(card =>
      <Card avatar={card.avatar} name={card.name} title={card.title} key={card.id}
        onDelete={() => this.deleteCardHandler(card.id)}
        onChangedName={(event) => this.changeNameHandler(event, card.id)}
      />)
    return (
      <ThemeProvider theme={Theme} >
        <div className="App">
          <Button color="mango" length={this.state.cards.length} onClick={this.toogleShowCard}>Toogle show/hide</Button>
          <p><button className="button button-green" onClick={this.addCardHandler}>Add card</button></p>
          {cardsMarkup}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;