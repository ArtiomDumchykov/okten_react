import React, { useState } from 'react';

import "./RegisterPage.scss"

import { RegisterForm } from '../../components'
import { UsersService } from '../../servives_v2/UsersService';

const usersService = new UsersService()

const initialForm = {
  name: "",
  username: "",
  email: "",
  phone: "",
  password: "",
  confirmpassword: "",
}

export  function RegisterPage() {

  const [formValues, setFormValues] = useState(initialForm)

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
  
      const response = await usersService.createUser(formValues)
      console.log(response);

      if (response.status === 201) {
        handleResetForm()
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleChangeForm = (e, key) => {
    e.preventDefault();
    const target = e.target
    setFormValues(prev => ({...prev, [key]: target.value}))
    
  }

  const handleResetForm = () => {
    setFormValues(initialForm)
  }

  return (
    <div className="wrapper">
        <RegisterForm 
          formValues={formValues} 
          handleChangeForm={handleChangeForm}
          handleSubmit={handleSubmit} 
        />
    </div>
  )
}
