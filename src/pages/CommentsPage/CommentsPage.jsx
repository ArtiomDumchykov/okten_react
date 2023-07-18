import React, { useRef } from 'react';

import './CommentsPage.scss';

import { CommentsForm } from '../../components';

import { CommentsService } from '../../servives_v2'

const commentsService = new CommentsService(); 

export function CommentsPage() {

    const postIdRef = useRef('');
    const emailRef = useRef('');
    const titleRef = useRef('');
    const textRef = useRef('');

    const valuesForm = () => {
        return {
            postId: +getCurrentValue(postIdRef),
            email: getCurrentValue(emailRef),
            name: getCurrentValue(titleRef),
            body: getCurrentValue(textRef),
        }
      }

    const handleResetFormRef = (...refs) => {
        refs?.map(item => item.current.value = "")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            e.preventDefault();
            
            const data = valuesForm()
            const response = await commentsService.createComments(data)
      
            if (response.status === 201) {
                handleResetFormRef(postIdRef, emailRef, titleRef, textRef)
            }
        } catch (err) {
            console.log(err);
        } 
    }

    function getCurrentValue(ref) {
        return ref.current.value
    }

    return (
        <div className='wrapper'>
            <CommentsForm
                refs={{
                    postIdRef,
                    emailRef,
                    titleRef,
                    textRef,
                }}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}
