import {LOGOUT_USER} from '../../../Constants/ActionTypes/Action'

const Logout = (history) => (dispatch) => {
  localStorage.removeItem('token')

  dispatch({
    type: LOGOUT_USER
  })

  history.push('/auth/login')
}

export default Logout
