import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from '../../../Constants/ActionTypes/Action'
import axiosInstance from '../../../Helper/axiosInstance'

const login = ({
  password,
  username
}) => (dispatch) => {

  dispatch({
    type: LOGIN_LOADING
  })

  axiosInstance().post('/auth/login',
    {
      password,
      username,
    })
    .then(re => {
      localStorage.token = re.data.token
      dispatch({
        type: LOGIN_SUCCESS,
        payload: re.data
      })
    })
    .catch(er =>
      dispatch({
        type: LOGIN_ERROR,
        payload: er.response ? er.response.data.detail : 'Could not connect'
      }))
}

export default login
