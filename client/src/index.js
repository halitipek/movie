import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './config/store'

import './index.css'
import App from './containers/App'

const renderTarget = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  renderTarget
)