import React, {useState} from 'react';
import './App.css';
import Card from './Card'
import faker from 'faker'

function App() {
  const [name, setName] = useState("Alan Smith")
  const buttonsMarkup = (
    <div>
      <button className="button button2">Yes</button>
      <button className="button button3">No</button>
    </div>
  )
  const changeNameHandler = () => setName(`${faker.name.firstName()} ${faker.name.lastName()}`)

  return (
    <div className="App">
      <button className="button button4" onClick={changeNameHandler}>Change Name</button>
      <Card 
        avatar='https://cdn.fakercloud.com/avatars/nfedoroff_128.jpg'
        name={name}
        title="Internal Creative Engineer"
      >{buttonsMarkup}</Card>
    </div>
  );
}

export default App;
