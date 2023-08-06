import React, { Component } from 'react'

export  class Car extends Component {
  render() {
    const {id, brand, price, year} = this.props.car
    return (
        <li>
            <div>Id: {id}, brand: {brand}</div>
            <div>price: {price}, year: {year}</div>
        </li>

    )
  }
}
