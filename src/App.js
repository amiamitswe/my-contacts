import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './Routes/Routes'
import Header from './Components/Header/Header'
import './App.css'
import { GlobalProvider } from './Context/Provider'

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Switch>
          {routes.map((el, index) => (
            <Route
              key={index}
              path={el.path}
              component={el.component}
              exact />
          ))}
        </Switch>
      </GlobalProvider>
    </div>
  )
}

export default App
