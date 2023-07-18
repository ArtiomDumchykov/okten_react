import React from 'react'

export function CommentsForm({refs, handleSubmit, ...rest}) {
  const {postIdRef, emailRef, titleRef, textRef,} = refs
  return (
    <div className='form-wrap'>
      <form className="comments-form" onSubmit={handleSubmit}>
        <div className="comments-form__container">
          <div className="forms-fields">
            <div className="field-wrap">
              <label htmlFor="postId" className='label-wrap'>
                <span className="label-text">postId</span>
                <input
                  type="number"
                  min={1}
                  max={100}
                  name='postId'
                  className='field'
                  placeholder='from 1 to 100'

                  ref={postIdRef}
                />
                <span className="error-message">error</span>
              </label>
            </div>
            <div className="field-wrap">
              <label htmlFor="user-email" className='label-wrap'>
                <span className="label-text">email</span>
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
              <label htmlFor="comments-title" className='label-wrap'>
                <span className="label-text">title</span>
                <input
                  type="text"
                  name='comments-title'
                  className='field'
                  placeholder='title comment'
                  ref={titleRef}
                />
                <span className="error-message">error</span>
              </label>
            </div>
            <div className="field-wrap">
              <label htmlFor="comments-body" className='label-wrap'>
                <span className="label-text">text</span>
                <textarea
                  type="text"
                  name='comments-body'
                  className='field'
                  placeholder='text comment'
                  ref={textRef}
                > 
                </textarea>
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
