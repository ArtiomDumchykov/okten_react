import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { carsActions } from '../../../reduxTK';

import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { carValidator } from '../../../validators';

export const CarForm = () => {
    const dispatch = useDispatch();
    const { carForUpdate } = useSelector(store => store.cars)

    const { register, handleSubmit, reset, formState: { errors, isValid }, setValue } = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    })

    useEffect(() => {
        if (carForUpdate) {
            setValue("brand", carForUpdate.brand, { shouldValidate: true });
            setValue("price", carForUpdate.price, { shouldValidate: true });
            setValue("year", carForUpdate.year, { shouldValidate: true });
        }
    }, [carForUpdate, setValue])

    const add = async (car) => {
        dispatch(carsActions.createCar({car}));
        reset()
    }

    const update = async (car) => {
        dispatch(carsActions.updateCar({id: carForUpdate.id, car}));
        reset()
    }

    return (
        <div className="form-wrap">
            <form
                className="form"
                onSubmit={handleSubmit(!carForUpdate ? add : update)}
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
                            {!carForUpdate ? "add" : "update"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
