import { CONTACTS_ERROR, CONTACTS_LOADING, CONTACTS_LOAD_SUCCESS } from '../../../Constants/ActionTypes/Action'
import { CONNECTION_ERROR } from '../../../Constants/api'
import axiosInstance from '../../../Helper/axiosInstance'

const getContacts = (history) => (dispatch) => {

  dispatch({
    type: CONTACTS_LOADING
  })

  axiosInstance(history).get('/contacts/')
    .then(res => {
      dispatch({
        type: CONTACTS_LOAD_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: CONTACTS_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR
      })
    })
}

export default getContacts
