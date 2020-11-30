import React from 'react'
import { GlobalContext } from '../../Context/Provider'

const Contacts = () => {

  const context = React.useContext(GlobalContext)

  console.log(context);
  return (
    <div>
      <h1>Contacts</h1>
    </div>
  )
}

export default Contacts
