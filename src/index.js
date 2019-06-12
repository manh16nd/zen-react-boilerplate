import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'
import getHistory from './store/getHistory'

const history = getHistory()

ReactDOM.render(<Router history={history}>
    <App />
</Router>, document.getElementById('root'))

serviceWorker.unregister()
