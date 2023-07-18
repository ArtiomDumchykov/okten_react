import React from 'react'

export function RegisterForm({ formValues, handleChangeForm, handleSubmit, ...rest }) {
  const { name, username, email, phone, password, confirmpassword } = formValues
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
                  value={name}
                  onChange={(e) => handleChangeForm(e, "name")} 
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
                  value={username}
                  onChange={(e) => handleChangeForm(e, "username")} 
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
                  value={email}
                  onChange={(e) => handleChangeForm(e, "email")} 
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
                  value={phone}
                  onChange={(e) => handleChangeForm(e, "phone")} 
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
                  value={password}
                  onChange={(e) => handleChangeForm(e, "password")} 
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
                  value={confirmpassword}
                  onChange={(e) => handleChangeForm(e, "confirmpassword")} 
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
