import React from 'react'
import { LoginForm } from '../../components'

export {db_users}  from '../../db/db.js'

export  function LoginPage() {

  return (
    <div className='wrap'>
        <LoginForm />
    </div>
  )
}
