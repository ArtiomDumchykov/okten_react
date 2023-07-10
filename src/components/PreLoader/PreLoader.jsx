import React from 'react'
import './PreLoader.scss'
import { usePosts } from '../../hooks'
export function PreLoader() {
  return (
    <div className='loading-dots'>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
    </div>
  )
}
