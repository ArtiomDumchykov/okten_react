import React, { Component } from 'react'
import { Cars } from '../../components'

export  class CarsPage extends Component {
  render() {
    return (
        <div className='cars'>
        <div className="cars__container _container">
            <div className="cars__title_header">
                <h2 className='cars__title'>Cars</h2>
            </div>
            <div className="cars__content_wrap">
                   <Cars/>
            </div>
        </div>
    </div>
    )
  }
}
