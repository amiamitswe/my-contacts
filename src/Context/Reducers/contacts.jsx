import { ADD_CONTACT_ERROR, ADD_CONTACT_LOAD, ADD_CONTACT_SUCCESS, CLEAR_ADD_CONTACT, CONTACTS_ERROR, CONTACTS_LOADING, CONTACTS_LOAD_SUCCESS, LOGOUT_USER } from "../../Constants/ActionTypes/Action"
import contact from '../initialStates/contactsInitialState'
const contacts = (state, { payload, type }) => {
  switch (type) {

    case CONTACTS_LOADING: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: true
        }
      }
    }

    case CONTACTS_LOAD_SUCCESS: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: payload
        }
      }
    }

    case CONTACTS_ERROR: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          error: payload
        }
      }
    }

    case LOGOUT_USER: {
      return {
        ...state,
        contact
      }
    }

    case ADD_CONTACT_LOAD: {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          error: null,
          loading: true
        }
      }
    }

    case ADD_CONTACT_ERROR: {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          error: payload
        }
      }
    }

    case ADD_CONTACT_SUCCESS: {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          data: payload,
          loading: false
        },
        contacts: {
          ...state.contacts,
          loading: false,
          data: [payload, ...state.contacts.data]
        }
      }
    }

    case CLEAR_ADD_CONTACT: {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          data: null,
          error: null,
          loading: false
        }
      }
    }



    default:
      return state
  }
}


export default contacts