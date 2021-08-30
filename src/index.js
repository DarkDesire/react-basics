import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css";
//import App from './projects/p2cardList/App';
//import App from './projects/p3hooks/useContext/App'
//import App from './projects/p3hooks/useReducer/App'
import reportWebVitals from './reportWebVitals';
//import App from './projects/p3hooks/useReducer-useContext/App';
//import App from './projects/p3hooks/useReducer-useEffect-axios/App';
import App from './projects/p3hooks/useMemo/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
