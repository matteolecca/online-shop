import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/checkoutForm.css'
import './css/fonts.css'
import './css/transitions.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import cartSliceReducer from './redux/slices/cart-slice'
import popupSliceReducer from './redux/slices/popup-slice'

const store = createStore(
  combineReducers({
    popup : popupSliceReducer,
    cart : cartSliceReducer,
  })
)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
