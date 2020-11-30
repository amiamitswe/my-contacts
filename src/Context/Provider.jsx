import React from 'react'
import auth from '../Context/Reducers/auth'
import contacts from '../Context/Reducers/contacts'
import authInitialState from '../Context/initialStates/authInitialState'
import contactsInitialState from './initialStates/contactsInitialState'


export const GlobalContext = React.createContext({})
export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = React.useReducer(auth, authInitialState)
  const [contactState, contactDispatch] = React.useReducer(contacts, contactsInitialState)

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        contactState,
        contactDispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}