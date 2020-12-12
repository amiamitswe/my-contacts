import React from 'react'
import userLeaveConfirmation from './Components/ConfrimModal/userLeaveConfirmation'
import { Switch, Route, useHistory, BrowserRouter as Router } from 'react-router-dom'
import routes from './Routes/Routes'
import Header from './Components/Header/Header'
import { GlobalProvider } from './Context/Provider'
import isAuth from './Utils/isAuthenticated'
import './App.css'

function App() {

  const [open, setOpen] = React.useState(true)

  const RenderRoute = (el) => {
    const location = useHistory()

    document.title = el.title || 'Contact App'

    if (el.needsAuth && !isAuth()) {
      location.push('/auth/login')
    }
    return (
      <Route
        path={el.path}
        component={el.component}
        exact />
    )
  }

  return (
    <div className="App">
      <GlobalProvider>
        <Router getUserConfirmation={(message, callback) => {
          return userLeaveConfirmation(message, callback, open, setOpen)
        }}>
          <Header />
          <div style={{padding: '0 10px'}}>
          <Switch>
            {routes.map((el, index) => (
              <RenderRoute key={index} {...el} />
            ))}
          </Switch>
          </div>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App


