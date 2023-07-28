import React from 'react'
import { useForm } from 'react-hook-form';

import './LoginForm.scss'

export function LoginForm() {


    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all'
    })


    return (
        <div className='form-wrap'>
            <form className="login-form">
                <div className="login-form__container">

                    <div className="form__fields">
                        <div className="fields-wrap">
                            <label htmlFor="" className="label-wrap">
                                <span className="label-text">login</span>
                                <input type="text" {...register("login")}/>
                            </label>
                        </div>
                        <div className="fields-wrap">
                            <label htmlFor="" className="label-wrap">
                                <span className="label-text">password</span>
                                <input type="text" {...register("password")}/>
                            </label>
                        </div>
                    </div>

                    <div className="submit-wrap-btn">
                        <button 
                        style={{
                            padding: "7px 15px",
                            border: "1px solid black"
                        }}
                            type='submit' 
                            className='submit-btn'
                            disabled={!isValid}
                        >
                            login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

// export function LoginForm() {
//     return (
//         <div>
//             <form className={styles.form} onSubmit={handleSubmit} autoComplete={'off'}>
//                 <label>
//                     Email:
//                     <br />
//                     <input type="text" ref={emailRef} />
//                 </label>
//                 <label>
//                     Password:
//                     <br />
//                     <input type="password" ref={passwordRef} />
//                 </label>

//                 <button type='submit'>Login</button>
//             </form>
//         </div>
//     )
// }
