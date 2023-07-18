import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';

import { carValidator } from '../../../validators';
import { CarsService } from '../../../servives_v2';

const carsService = new CarsService()

export const CarForm = ({setAddCar, carUpdate, setCarUpdate, ...rest}) => {

    const { register, handleSubmit, reset, formState: { errors, isValid }, setValue } = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    })

    useEffect(() => {
        if (carUpdate) {
            setValue("brand", carUpdate.brand, {shouldValidate: true})
            setValue("price", carUpdate.price, {shouldValidate: true})
            setValue("year", carUpdate.year, {shouldValidate: true})
        }
    }, [carUpdate])

    const add = async (data) => {
        console.log(data);
        try {
            const response = await carsService.createCar(data);
            console.log(response);
            setAddCar(prev => !prev);
            reset()
            
        } catch (error) {
            console.log(error);
        }
    }

    const update = async(data) => {
        try {
            await carsService.updateCar(carUpdate.id, data)
            setAddCar(prev => !prev);
            setCarUpdate(null);
            reset()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form-wrap">
            <form 
                className="form"
                onSubmit={handleSubmit(!carUpdate ? add : update)}
            >
                <div 
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}
                    className="form__cintainer"
                >
                    <div className="form_fields">
                        <div className="field-wrap">
                            <label
                                style={{
                                    display: "flex",
                                    gap: "10px"
                                }} 
                                htmlFor="brand" className='label-wrap'>
                                <span className="label-text">brand</span>
                                <input
                                    type="text"
                                    name='brand'
                                    className='field'
                                    placeholder='brand'
                                    {...register("brand")}
                                />
                                {errors.brand && <span>{errors.brand.message}</span>}
                            </label>
                        </div>
                        <div className="field-wrap">
                            <label
                                style={{
                                    display: "flex",
                                    gap: "10px"
                                }} 
                                htmlFor="price" className='label-wrap'>
                                <span className="label-text">price</span>
                                <input
                                    type="number"
                                    name='price'
                                    className='field'
                                    placeholder='price'
                                    {...register("price", {
                                        valueAsNumber: true
                                    })}
                                />
                                {errors.price && <span>{errors.price.message}</span>}
                            </label>
                        </div>
                        <div className="field-wrap">
                            <label
                                style={{
                                    display: "flex",
                                    gap: "10px"
                                }} 
                                htmlFor="brand" className='label-wrap'>
                                <span className="label-text">year</span>
                                <input
                                    type="number"
                                    name='brand'
                                    className='field'
                                    placeholder='year'
                                    {...register("year", {
                                        valueAsNumber: true
                                    })}
                                />
                                {errors.year && <span>{errors.year.message}</span>}
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
                            {!carUpdate ? "add" : "update"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
