import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import mySaga from './redux/sagas';
import reducers from './redux/reducers';
import { createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers , applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);

