import React from 'react'
import { useHistory } from 'react-router-dom'
import getContacts from '../../Context/Actions/Contacts/getContacts'
import { GlobalContext } from '../../Context/Provider'
import ListLoader from '../../Layout/Contacts/List/ListLoader'

const Contacts = () => {

  const { contactDispatch, contactState } = React.useContext(GlobalContext)

  const history = useHistory()

  React.useEffect(() => {
    getContacts(history)(contactDispatch)
  }, [])

  console.log(contactState)
  return (
    <div>
      <h1>Contacts</h1>
      <ListLoader state={contactState} />
    </div>
  )
}

export default Contacts
