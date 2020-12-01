import { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import register from "../../Context/Actions/auth/Register"
import { GlobalContext } from '../../Context/Provider'

const useFrom = () => {
  const [form, setForm] = useState({})
  const [fieldErrors, setFieldErrors] = useState({})

  const history = useHistory()

  const { authDispatch, authState: { auth: { loading, error, data } } } = useContext(GlobalContext)

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value })
  }


  useEffect(() => {
    if (error) {
      for (let item in error) {
        setFieldErrors({ ...fieldErrors, [item]: error[item][0] })
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  useEffect(()=> {
    if(data) {
      history.push('/auth/login')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])

  console.log('error', error)
  console.log('data', data)

  console.log('authState', loading)

  const registerFormValid =
    !form.username?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.email?.length ||
    !form.password?.length ||
    !form.confirmPassword?.length ||
    form.password !== form.confirmPassword

  const onSubmit = () => {
    setFieldErrors({})
    register(form)(authDispatch)
  }

  return { form, onChange, loading,fieldErrors, registerFormValid, onSubmit }
}

export default useFrom