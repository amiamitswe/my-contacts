import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './Routes/Routes'
import Header from './Components/Header/Header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          {routes.map((el, index) => (
            <Route
              key={index}
              path={el.path}
              component={el.component}
              exact />
          ))}
        </Switch>
      </Router>
    </div>
  )
}

export default App
