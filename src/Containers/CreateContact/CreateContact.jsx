import React, { useContext, useState, useEffect } from 'react'
import clearCreateContact from '../../Context/Actions/Contacts/clearCreateContact'
import CreateContact from '../../Context/Actions/Contacts/CreateContact'
import Create from '../../Layout/Contacts/List/Create/Create'
import { GlobalContext } from '../../Context/Provider'
import { useHistory } from 'react-router-dom'

const CreateContactContainer = () => {
  const [form, setForm] = useState({})
  const [imageFile, setImageFile] = useState(null)
  const history = useHistory()

  const { contactDispatch, contactState: { addContact: { loading, error, data } } } = useContext(GlobalContext)


  useEffect(() => {
    if (data) {

      console.log('my data is', data)
      history.push('/')
    }

    return () => {
      clearCreateContact()(contactDispatch)
    }
  }, [data])

  console.log('data', data)

  // function for image start
  const onImageChange = (e) => {
    e.persist()
    const fileURL = e.target.files[0]
    setForm({ ...form, contact_picture: fileURL })
    
    if(fileURL) {
      setImageFile(URL.createObjectURL(fileURL))
    }
  }
  // function for image end

  const formIsHalfFiled = Object.values(form)
    .filter(item => item && item !== '')?.length > 0 && !data

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value })
  }

  const onSubmit = () => {
    CreateContact(form)(contactDispatch)
  }

  const formInvalid =
    !form.first_name?.length ||
    !form.last_name?.length ||
    !form.country_code?.length ||
    !form.phone_number?.length

  console.log(formInvalid)
  return (
    <div>
      <h1>Create Contact</h1>
      <Create
        formInvalid={formInvalid}
        onSubmit={onSubmit}
        onChange={onChange}
        form={form}
        loading={loading}
        formIsHalfFiled={formIsHalfFiled}
        onImageChange={onImageChange}
        imageFile={imageFile}
      />
    </div>
  )
}

export default CreateContactContainer
