import { useState } from "react"

const useFrom = () => {

  const [formField] = useState({
    username: {
      label: 'username',
      name: 'username',
      type: 'text',
      require: true,
      config: {
        minLength: 6,
        maxLength: 20
      }
    },
    firstName: {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      require: true,
      config: {
        minLength: 1,
        maxLength: 20
      }
    },
    lastName: {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      require: true,
      config: {
        minLength: 1,
        maxLength: 20
      }
    },
    email: {
      label: 'Email',
      name: 'email',
      type: 'email',
      require: true,
      config: {
        minLength: 1,
        maxLength: 20
      }
    },
    password: {
      label: 'Password',
      name: 'password',
      type: 'password',
      require: true,
      config: {
        minLength: 1,
        maxLength: 20
      }
    }
  })

  const [form, setForm] = useState({})

  const [formValid, setFormValid] = useState(false)
  const onChange = (e, { name, value }) => {
    if(value.length > formField[name].config.minLength && 
      value.length < formField[name].config.maxLength ) {
        setFormValid(true)
      console.log(formValid);
    }
    else {
      setFormValid(false)
    }

    setForm({ ...form, [name]: value })
  }

  console.log(formValid);
  // console.log('form', form)
  return { form, onChange, formField, formValid }
}

export default useFrom