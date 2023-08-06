import React, { Component } from 'react'
import { carsService } from '../../services';
import { Car } from './Car/Car';

export class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    async componentDidMount() {
        try {
            const {data} = await carsService.getAll()
            this.setState(prev => ({...prev, cars: data}))
        } catch (error) {
            console.log(error);
        }
    }
  render() {
    const {cars} = this.state
    return (
        <>
        {
            !!cars?.length 
            ? (
                <ul className='comments__list'>
                    {[...cars].map(item => <Car car={item} key={item.id}/>)}
                </ul>
            )
            : <div>not comments</div>
        }
    </>
    )
  }
}
