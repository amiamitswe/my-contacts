import { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import login from "../../Context/Actions/auth/Login"
import { GlobalContext } from '../../Context/Provider'

const useFrom = () => {
  const [form, setForm] = useState({})
  const history = useHistory()

  const { authDispatch, authState: { auth: { loading, error, data } } } = useContext(GlobalContext)

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value })
  }

  console.log('error', error)
  console.log('data', data)

  console.log('authState', loading)

  const loginFormValid =
    !form.username?.length ||
    !form.password?.length

  const onSubmit = () => {
    login(form)(authDispatch)
  }

  useEffect(() => {
    if(data) {
      if(data.user) {
        // console.log('test');
        history.push('/')
      }
    }
  }, [data])

  return { form, onChange, loading, error, loginFormValid, onSubmit }
}

export default useFrom