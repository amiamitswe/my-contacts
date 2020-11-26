import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

import Actions from '../../Context/Actions/Actions'

const Register = () => {


  useEffect(() => {
    Actions()
  },[])

  return (
    <div>
      <h1>Register</h1>
      <Link to='/auth/login'>Login</Link>
    </div>
  )
}

export default Register
