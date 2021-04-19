import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/checkoutForm.css'
import './css/fonts.css'
import App from './App';
import reportWebVitals from './reportWebVitals';


import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import {productsListener, ordersListener}  from './redux/index'

import productsReducer from './redux/reducers/products-reducer'
import cartReducer from './redux/reducers/cart-reducer'
import eventReducer from './redux/reducers/event-reducer'
import orderReducer from './redux/reducers/order-reducer'
import resultReducer from './redux/reducers/result-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers({
    productsReducer : productsReducer,
    cartReducer : cartReducer,
    eventReducer : eventReducer,
    orderReducer : orderReducer,
    resultReducer : resultReducer,
  }),
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)
sagaMiddleware.run(productsListener)
sagaMiddleware.run(ordersListener)

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
