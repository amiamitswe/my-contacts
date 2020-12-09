import React from 'react'

import LoginFrom from '../../Layout/Login/Login'
import useFrom from './useForm'

const Login = () => {


  return (
    <div>
      <h1>Login to your account</h1>
      <LoginFrom formHandle={useFrom()} />
    </div>
  )
}

export default Login
