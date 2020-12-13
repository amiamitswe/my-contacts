import { DELETE_CONTACT_ERROR, DELETE_CONTACT_LOADING, DELETE_CONTACT_SUCCESS } from '../../../Constants/ActionTypes/Action'
import axiosInstance from '../../../Helper/axiosInstance'
import { CONNECTION_ERROR } from '../../../Constants/api'

const deleteContact = (id) => (dispatch) => {
  dispatch({
    type: DELETE_CONTACT_LOADING,
    payload: id
  })


  axiosInstance().delete(`/contacts/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: id
      })
    })
    .catch(error => {
      dispatch({
        type: DELETE_CONTACT_ERROR,
        payload: error.response ? error.response.data : CONNECTION_ERROR
      })
    })
}

export default deleteContact
