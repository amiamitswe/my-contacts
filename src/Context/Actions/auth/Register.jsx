import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from '../../../Constants/ActionTypes/Action'
import axiosInstance from '../../../Helper/axiosInstance'

const register = ({
  email,
  password,
  username,
  lastName: last_name,
  firstName: first_name
}) => (dispatch) => {

  dispatch({
    type: REGISTER_LOADING
  })

  axiosInstance().post('/auth/register',
    {
      email,
      password,
      username,
      last_name,
      first_name
    })
    .then(re => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: re.data
      })
    })
    .catch(er => 
      dispatch({
        type: REGISTER_ERROR,
        payload: er.response ? er.response.data.detail : 'Could not connect'
      }))
}

export default register
