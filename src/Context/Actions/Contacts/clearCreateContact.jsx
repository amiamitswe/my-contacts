import { CLEAR_ADD_CONTACT } from "../../../Constants/ActionTypes/Action"

const clearCreateContact = () => (dispatch) => {
  dispatch({
    type: CLEAR_ADD_CONTACT
  })
}

export default clearCreateContact