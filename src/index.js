import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardApp from './CardApp';
import ContextApp from './ContextApp'
import ReducerApp from './ReducerApp'
import reportWebVitals from './reportWebVitals';
import ReducerContextApp from './ReducerContextApp';
import ReducerAxiosFetchDataApp from './ReducerAxiosFetchDataApp';

ReactDOM.render(
  <React.StrictMode>
    <ReducerAxiosFetchDataApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
