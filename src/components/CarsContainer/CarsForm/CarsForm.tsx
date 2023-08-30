import React, { Dispatch, FC, PropsWithChildren, SetStateAction, useEffect } from 'react'
import { AxiosError } from 'axios';

import {SubmitHandler, useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';

import './CarsForm.scss';

import { ICar } from '../../../intefaces';
import { useCarsFrom } from '../../../hooks';
import { carValidator } from '../../../validators';
import { carsActions } from '../../../reduxRTK/slices';

import { Button } from '../../Button/Button';
interface IProps extends PropsWithChildren {

}

export const CarsForm: FC<IProps> = () => {

    const {register, reset, handleSubmit, setValue, formState: {errors, isValid}} = useForm<ICar>({
        mode: "all",
        resolver: joiResolver(carValidator)
    })

    const {carForUpdate, dispatch} = useCarsFrom();


    useEffect(() => {
 
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])


    const add: SubmitHandler<ICar> = async (car) => {
        try {
            await dispatch(carsActions.create({car}))
            reset();
        } catch (error) {
            const err = error as AxiosError;
            console.log(err)
        }
    } 
    const update: SubmitHandler<ICar> = async (car) => {
        try {
         
            await dispatch(carsActions.update({id: carForUpdate.id, car}))
            reset();
        } catch (error) {
            const err = error as AxiosError;
            console.log(err)
        }
    } 


    return (
        <div className="form-wrap">
            <form 
                className="form" 
                onClick={handleSubmit(!carForUpdate ? add : update)}
                
            >
                <div className="form__container">
                    <div className="form__fileds">
                        <div className="field-wrap">
                            <label htmlFor="brand" className="label-wrap">
                                <span className="label__text">brand</span>
                                <input type="text" name='brand' className="field"  placeholder='brand' {...register("brand")}/>
                            </label>
                            {errors.brand && <span className='errors brand-errors'>{errors.brand.message}</span>}
                        </div>
                        <div className="field-wrap">
                            <label htmlFor="price" className="label-wrap">
                                <span className="label__text">price</span>
                                <input type="number" name='price' className="field"  placeholder='price' {...register("price", {
                                    valueAsNumber: true
                                })}/>
                            </label>
                            {errors.price && <span className='errors price-errors'>{errors.price.message}</span>}
                        </div>
                        <div className="field-wrap">
                            <label htmlFor="year" className="label-wrap">
                                <span className="label__text">year</span>
                                <input type="number" name='year' className="field"  placeholder='year' {...register("year", {
                                    valueAsNumber: true
                                })}/>
                            </label>
                            {errors.year && <span className='errors year-errors'>{errors.year.message}</span>}
                        </div>
                    </div>
                    <Button
                        type={"submit"}
                        classNameWrap={"submit-wrap-btns"}
                        classNameBtn={'submit-btn'}
                        disabled={!isValid}
                    >
                        {!carForUpdate ? "add" : "update"}
                    </Button>
                </div>
            </form>
        </div>
    )
}
