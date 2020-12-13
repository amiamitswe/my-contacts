import { SEARCH_CONTACTS } from "../../../Constants/ActionTypes/Action"


const searchContacts = (searchText) => (dispatch) => {
  dispatch({
    type: SEARCH_CONTACTS,
    payload: searchText
  })
}

export default searchContacts
