import React from 'react'
import ReactDOM  from "react-dom"
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import { compose } from 'redux';

import rootReducer from './reducers';

import App from './App'
import './index.css'


const store = configureStore({
  reducer: rootReducer,
  middleware: [compose(thunk)],
});  

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )