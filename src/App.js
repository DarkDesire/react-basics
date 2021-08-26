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
  const changeNameHandler = name => setName(name) //
  const changeInputHandler = event => setName(event.target.value)

  return (
    <div className="App">
      <button className="button button4" onClick={() => changeNameHandler("Will Smith")}>Change Name</button>
      <Card 
        avatar='https://cdn.fakercloud.com/avatars/nfedoroff_128.jpg'
        name={name}
        onChangeName={() => changeNameHandler( `${faker.name.firstName()} ${faker.name.lastName()}`)}
        onChangeInput={changeInputHandler}
        title="Internal Creative Engineer"
      >{buttonsMarkup}</Card>
    </div>
  );
}

export default App;
