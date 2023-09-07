import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuth } from '../../intefaces'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { authActions } from '../../reduxRTK/slices'
import { Button } from '../../components'

export const LoginPage = () => {
    const {register, reset, handleSubmit} = useForm<IAuth>()

  const dispatch = useAppDispatch()
  const {errors} = useAppSelector(state => state.auth)
  const navigate = useNavigate()

  const login: SubmitHandler<IAuth> = async (user) => {
    const {meta: {requestStatus}} = await dispatch(authActions.login({user}))
    if (requestStatus === "fulfilled") {
        reset();
        navigate('/cars')
    }
  }

  return (
    <div className="form-wrap">
            <form 
                className="form" 
                onSubmit={handleSubmit(login)}  
            >
                <div className="form__container">
                    <div className="form__fileds">
                        <div className="field-wrap">
                            <label htmlFor="username" className="label-wrap">
                                <span className="label__text">username</span>
                                <input type="text" name='username' className="field"  placeholder='username' {...register("username")}/>
                            </label>
                        </div>
                        <div className="field-wrap">
                            <label htmlFor="password" className="label-wrap">
                                <span className="label__text">password</span>
                                <input type="text" name='password' className="field"  placeholder='password' {...register("password")}/>
                            </label>
                        </div>
                    </div>
                    <Button
                        type={"submit"}
                        classNameWrap={"submit-wrap-btns"}
                        classNameBtn={'submit-btn'}
                    >
                        login
                    </Button>
                    {errors && <span className='errors'>{errors.detail}</span>}
                </div>
            </form>
        </div>
  )
}
