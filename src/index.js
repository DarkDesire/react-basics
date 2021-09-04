import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './projects/p2cardList/App';
//import App from './projects/p3hooks/useContext/App'
//import App from './projects/p3hooks/useReducer/App'
import reportWebVitals from './reportWebVitals';
//import App from './projects/p3hooks/useReducer-useContext/App';
//import App from './projects/p3hooks/useReducer-useEffect-axios/App';
//import App from './projects/p3hooks/useMemo/App';
//import App from './projects/p3hooks/useRef/App';
//import App from './projects/p3hooks/useCallback/App';
//import App from './projects/p3hooks/customHook/useCounter/App';
//import App from './projects/p3hooks/customHook/useInput/App';
import App from './projects/p4router/App';
import * as serviceWorker from './serviceWorker';

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
