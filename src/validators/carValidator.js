import Joi from 'joi';

export const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        "string.pattern.base": "Бранд має складатись тільки з літер мін 1 макс 20 символів",
        "string.reqired": 'Це поле є обов\'язковим'
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})


