import React, { useEffect } from 'react'

import RegisterFrom from '../../Layout/Register/Register'
import useFrom from './useForm'

const Register = () => {


  useEffect(() => {

  }, [])

  return (
    <div>
      <h1>Register</h1>
      <RegisterFrom formHandle={useFrom()} />
    </div>
  )
}

export default Register
