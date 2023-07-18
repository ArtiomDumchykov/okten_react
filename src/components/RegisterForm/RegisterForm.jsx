import React from 'react'

export function RegisterForm({refs, handleSubmit, ...rest}) {
  const {nameRef,userNameRef,emailRef,phoneRef,passwordRef,confirmPasswordRef} = refs
  return (
    <div className='form-wrap'>
      <form className="login-gorm" onSubmit={handleSubmit}>
        <div className="login-form__container">
          <div className="forms-fields">
            <div className="field-wrap">
              <label htmlFor="name" className='label-wrap'>
                <span className="label-text">Name</span>
                <input
                  type="text"
                  name='name'
                  className='field'
                  placeholder='name'
                  ref={nameRef}
                />
                <span className="error-message">error</span>
              </label>
            </div>
            <div className="field-wrap">
              <label htmlFor="username" className='label-wrap'>
                <span className="label-text">UserName</span>
                <input
                  type="text"
                  name='username'
                  className='field'
                  placeholder='username'
                  ref={userNameRef}
                />
                <span className="error-message">error</span>
              </label>
            </div>
            <div className="field-wrap">
              <label htmlFor="user-email" className='label-wrap'>
                <span className="label-text">Email</span>
                <input
                  type="email"
                  name='user-email'
                  className='field'
                  placeholder='email'
                  ref={emailRef}
                />
                <span className="error-message">error</span>
              </label>
            </div>
            <div className="field-wrap">
              <label htmlFor="user-tel" className='label-wrap'>
                <span className="label-text">Phone</span>
                <input
                  type="tel"
                  name='user-tel'
                  className='field'
                  placeholder='phone'
                  ref={phoneRef}
                />
                <span className="error-message">error</span>
              </label>
            </div>
            <div className="field-wrap">
              <label htmlFor="user-password" className='label-wrap'>
                <span className="label-text">Password</span>
                <input
                  type="password"
                  name='user-password'
                  className='field'
                  placeholder='password'
                  ref={passwordRef}
                />
                <span className="error-message">error</span>
              </label>
            </div>
            <div className="field-wrap">
              <label htmlFor="user-confirmpassword" className='label-wrap'>
                <span className="label-text">Confirm Password</span>
                <input
                  type="password"
                  name='user-confirmpassword'
                  className='field'
                  placeholder='confirm password'
                  ref={confirmPasswordRef}
                />
                <span className="error-message">error</span>
              </label>
            </div>
          </div>
          <div className="btn-wrap">
            <button className='submit-btn _btn'>send</button>
          </div>
        </div>
      </form>
    </div>
  )
}
