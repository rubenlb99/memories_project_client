import React from 'react'
import ReactDOM  from "react-dom"
import { Provider } from 'react-redux'
import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

import App from './App'

const store = configureStore({
    reducer: rootReducer,
    middleware: compose(applyMiddleware(thunk))
  });  

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )