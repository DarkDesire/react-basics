import React, {useState} from 'react';
import './App.css';
import Card from './Card'
import faker from 'faker'

function App() {
  // states
  const [name, setName] = useState("Alan Smith")
  const [showCard, setShowCard] = useState(true)
  // handlers
  const changeNameHandler = name => setName(name)
  const changeInputHandler = event => setName(event.target.value)
  const toogleShowCard = () => setShowCard(!showCard)

  const buttonsMarkup = (
    <div>
      <button className="button button2">Yes</button>
      <button className="button button3">No</button>
    </div>
  )

  const cardsMarkup = showCard && 
    <Card 
      avatar='https://cdn.fakercloud.com/avatars/nfedoroff_128.jpg'
      name={name}
      onChangeName={() => changeNameHandler( `${faker.name.firstName()} ${faker.name.lastName()}`)}
      onChangeInput={changeInputHandler}
      title="Internal Creative Engineer"
    >{buttonsMarkup}</Card>
  
  return (
    <div className="App">
      <button className="button button4" onClick={toogleShowCard}>Toogle show/hide</button>
      {cardsMarkup}
    </div>
  );
}

export default App;
