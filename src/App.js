import React, { useState } from 'react';
import './App.css';
import Card from './Card'
import faker from 'faker'

function App() {
  // consts
  const cardsSize = 3
  const cardGenerator = () => ({
    id: `${faker.name.firstName()}_${faker.name.lastName()}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    title: faker.name.jobTitle(),
    avatar: faker.image.avatar(),
  })
  // states
  const [name, setName] = useState("Alan Smith")
  const [cards, setCards] = useState(Array(cardsSize).fill(0).map(_ => cardGenerator()))
  const [showCard, setShowCard] = useState(true)
  // handlers
  const changeNameHandler = (event, cardId) => {
    // which card
    const index = cards.findIndex(card => card.id === cardId)
    // copy
    var cards_copy = [...cards]
    console.log('card_copy', cards_copy)
    // change the name of specific card
    cards_copy[index].name = event.target.value
    console.log('card_copy', cards_copy)
    setCards(cards_copy)
  }
  const toogleShowCard = _ => setShowCard(!showCard)
  const deleteCardHandler = cardIdToDelete => {
    var cards_copy = [...cards]
    cards_copy = cards_copy.filter(card => card.id !== cardIdToDelete)
    setCards(cards_copy)
  }
  const addCardHandler = _ => {setCards([...cards, cardGenerator()])}
  
  // logic
  const buttonStyle = {backgroundColor: null}
  if (cards.length < 3) buttonStyle.backgroundColor = "lightpink"
  if (cards.length < 2) buttonStyle.backgroundColor = "red"
  
  const cardsMarkup = showCard && cards.map(card =>
    <Card avatar={card.avatar} name={card.name} title={card.title} key={card.id} 
      onDelete={() => deleteCardHandler(card.id)} 
      onChangedName = {(event) => changeNameHandler(event, card.id) }

    />)
  return (
    <div className="App">
      <p><button className="button button-green" onClick={addCardHandler}>Add card</button></p>
      <p><button className="button button-blue"  style={buttonStyle} onClick={toogleShowCard}>Toogle show/hide</button></p>
      {cardsMarkup}
    </div>
  );
}

export default App;
