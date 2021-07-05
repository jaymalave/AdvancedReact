import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducers from './reducers'
import {Provider} from 'react-redux'


// //Store - Globalized state

// //action increment
// const increment = () => {
//     return {
//       type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//    return {
//      type: 'DECREMENT'
//    }
// }
// //reducer 

// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;  
//   }
// }

// let store = createStore(counter);

// //Display it in the console
// store.subscribe(() => console.log(store.getState()))

// //dispatch
// store.dispatch(increment())

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  )

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
