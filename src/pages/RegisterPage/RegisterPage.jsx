import React, { useEffect, useRef, useState } from 'react';

import "./RegisterPage.scss"

import { RegisterForm } from '../../components'
import { UsersService } from '../../servives_v2/UsersService';

const usersService = new UsersService()

function valuesForm({nameRef, userNameRef, emailRef, phoneRef, passwordRef, confirmPasswordRef}) {
  return {
    name: getCurrentValue(nameRef),
    username: getCurrentValue(userNameRef),
    email: getCurrentValue(emailRef),
    phone: getCurrentValue(phoneRef),
    password: getCurrentValue(passwordRef),
    confirmpassword: getCurrentValue(confirmPasswordRef),
  }
}

function getCurrentValue(ref) {
  return ref.current.value
}

export  function RegisterPage() {

  const nameRef = useRef('');
  const userNameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');


  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const data = valuesForm({nameRef, userNameRef, emailRef, phoneRef, passwordRef, confirmPasswordRef})
      const response = await usersService.createUser(data)
      console.log(response);

      if (response.status === 201) {
        handleResetFormRef(nameRef, userNameRef, emailRef, phoneRef, passwordRef, confirmPasswordRef)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleResetFormRef = (...refs) => {
    refs?.map(item => item.current.value = "")
  }

  return (
    <div className="wrapper">
        <RegisterForm 
          refs={{
            nameRef,
            userNameRef,
            emailRef,
            phoneRef,
            passwordRef,
            confirmPasswordRef
          }}
          handleSubmit={handleSubmit}
        />
    </div>
  )
}
