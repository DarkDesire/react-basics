import React from 'react';
import './App.css';
import Card from './Card'
import faker from 'faker'

const buttonsMarkup = (
  <div>
    <button className="button button2">Yes</button>
        <button className="button button3">No</button>
  </div>
)
function App() {
  return (
    <div className="App">
      <Card 
        avatar={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
      >{buttonsMarkup}</Card>
      
      <Card 
        avatar={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
      >{buttonsMarkup}</Card>
      
      <Card 
        avatar={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
      >{buttonsMarkup}</Card>
      
    </div>
  );
}

export default App;
