import React from 'react'
import { useHistory } from 'react-router-dom'
import deleteContact from '../../Context/Actions/Contacts/deleteContact'
import getContacts from '../../Context/Actions/Contacts/getContacts'
import handleFavorite from '../../Context/Actions/Contacts/handleFavorite'
import { GlobalContext } from '../../Context/Provider'
import ListLoader from '../../Layout/Contacts/List/ListLoader'

const Contacts = () => {

  const { contactDispatch, contactState } = React.useContext(GlobalContext)

  const history = useHistory()

  const { contacts: { data } } = contactState

  React.useEffect(() => {
    if (data.length === 0) {
      getContacts(history)(contactDispatch)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteContactHandler = id => {
    deleteContact(id)(contactDispatch)
  }

  const handleFavoriteContact = (id, isFavorite) => {
    handleFavorite(id, isFavorite)(contactDispatch)
  }

  console.log(contactState)
  return (
    <div>
      <h1>Contacts</h1>
      <ListLoader
        state={contactState}
        deleteContact={deleteContactHandler}
        handleFavoriteContact={handleFavoriteContact} />
    </div>
  )
}

export default Contacts
