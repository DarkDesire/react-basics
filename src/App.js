import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card'
import faker from 'faker'
import { ThemeProvider } from 'styled-components'
import Button from './components/Button'
import Theme from './components/Theme'

function App() {  
  // consts
  const cardsSize = 3
  const cardGenerator = () => ({
    id: `${faker.name.firstName()}_${faker.name.lastName()}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    title: faker.name.jobTitle(),
    avatar: faker.image.avatar(),
  })
  // hooks
  const [name, setName] = useState("Alan Smith")
  const [cards, setCards] = useState(Array(cardsSize).fill(0).map(_ => cardGenerator()))
  const [showCard, setShowCard] = useState(true)
  useEffect(() => {
    alert("App js useEffect")
  }, [cards])
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
  const addCardHandler = _ => { setCards([...cards, cardGenerator()]) }

  // logic

  const cardsMarkup = showCard && cards.map(card =>
    <Card avatar={card.avatar} name={card.name} title={card.title} key={card.id}
      onDelete={() => deleteCardHandler(card.id)}
      onChangedName={(event) => changeNameHandler(event, card.id)}
    />)
  return (
    <ThemeProvider theme={Theme} >
      <div className="App">
        {cards.length>0 && <Button color="mango" length={cards.length} onClick={toogleShowCard}>Toogle show/hide</Button>}
        <p><button className="button button-green" onClick={addCardHandler}>Add card</button></p>
        {cardsMarkup}
      </div>
    </ThemeProvider>
  );
}

export default App;
