import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStoreHook, Provider } from 'react-redux'
import { NoteRedux } from './Reduccers/NoteRedux'
import { createStore } from 'redux'

// const store = createStoreHook(NoteRedux, Provider)

const store = createStore(NoteRedux)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)
