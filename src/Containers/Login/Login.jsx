import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../../Context/Provider'

const Login = () => {


  const { authDispatch, authState: { auth: { loading, error, data } } } = useContext(GlobalContext)

  return (
    <div>
      <h1>{data ? `welcome ${data.username}` : 'Login'}</h1>
      <Link to='/auth/register'>Register</Link>
    </div>
  )
}

export default Login
