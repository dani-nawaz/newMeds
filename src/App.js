import React from 'react'
import './css/App.css'
import './css/normalize.css'
import './css/utilities.css'
import './css/media.css'
import './css/main.css'
// import { Footer } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Pages'
import TestPage from './Pages/TestPage'
import BasketPage from './Pages/BasketPage'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <TestPage />
          {/* <BasketPage /> */}
          {/* <Home /> */}
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
