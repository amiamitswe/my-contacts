import { ADD_CONTACT_ERROR, ADD_CONTACT_LOAD, ADD_CONTACT_SUCCESS, CONTACTS_ERROR } from "../../../Constants/ActionTypes/Action"
import axiosInstance from "../../../Helper/axiosInstance"
import { storage } from '../../../Helper/firebase'
import { FIREBASE_IMAGE_REF } from "../../../Constants/firebase"

const CreateContact = ({ contact_picture,
  country_code,
  first_name,
  is_favorite,
  last_name,
  phone_number }) => (dispatch) => {

    const saveToBackend = (url = null) => {
      axiosInstance()
        .post('/contacts/', {
          contact_picture: url,
          country_code,
          first_name,
          is_favorite,
          last_name,
          phone_number
        })
        .then(response => {
          console.log('data is here', response)
          dispatch({
            type: ADD_CONTACT_SUCCESS,
            payload: response.data
          })
        })
        .catch(error => {
          console.log(error)
          dispatch({
            type: ADD_CONTACT_ERROR,
            payload: error.response ? error.response.data : CONTACTS_ERROR
          })
        })
    }

    dispatch({
      type: ADD_CONTACT_LOAD
    })


    if (contact_picture) {
      storage.ref(`${FIREBASE_IMAGE_REF}/${contact_picture.name}`)
        .put(contact_picture)
        .on('state_changed', (snapshot) => { },
          async (error) => { },
          async () => {
            const url = await storage.ref(FIREBASE_IMAGE_REF)
              .child(contact_picture.name).getDownloadURL()

              console.log('url', url)

            saveToBackend(url)
          }
        )
    }

    else {
      saveToBackend()
    }

  }

export default CreateContact
