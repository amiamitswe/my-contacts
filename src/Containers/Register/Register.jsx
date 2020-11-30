import React,{useEffect} from 'react'

import Actions from '../../Context/Actions/Actions'
import RegisterFrom from '../../Layout/Register/Register'

const Register = () => {


  useEffect(() => {
    Actions()
  },[])

  return (
    <div>
      <h1>Register</h1>
      <RegisterFrom />
    </div>
  )
}

export default Register
