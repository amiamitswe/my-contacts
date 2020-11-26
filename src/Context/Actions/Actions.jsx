import axios from '../../Helper/axios'

const Actions = () => {
  axios.post('/auth/register')
    .then(re => console.log(re))
    .catch(er => console.log(er))
}

export default Actions
