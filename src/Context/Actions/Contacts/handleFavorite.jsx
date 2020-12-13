import { ADD_REMOVE_FAVORITE_ERROR, ADD_REMOVE_FAVORITE_LOADING, ADD_REMOVE_FAVORITE_SUCCESS } from "../../../Constants/ActionTypes/Action"
import axiosInstance from "../../../Helper/axiosInstance"
import { CONNECTION_ERROR } from '../../../Constants/api'



const handleFavorite = (id, isFavorite) => (dispatch) => {
  dispatch({
    type: ADD_REMOVE_FAVORITE_LOADING,
    payload: id
  })

  axiosInstance().patch(`/contacts/${id}`,{is_favorite : !isFavorite})
  .then(res => {
    console.log(res);
    dispatch({
      type: ADD_REMOVE_FAVORITE_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err);
    dispatch({
      type: ADD_REMOVE_FAVORITE_ERROR,
      payload: err.response ? err.response.data : CONNECTION_ERROR
    })
  })
}

export default handleFavorite
