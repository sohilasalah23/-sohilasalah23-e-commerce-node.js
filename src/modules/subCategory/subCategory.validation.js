import Joi from "joi";




/*  A D D       S U B C A T E G O R Y         S C H E M A */
export const addSchema = Joi.object({
    title: Joi.string().min(3).max(20).required(),
    category: Joi.string().hex().length(24).required(),
    image: Joi.object({
        fieldname: Joi.string().required(),
        originalname: Joi.string().required(),
        encoding: Joi.string().required(),
        mimetype: Joi.string().valid('image/jpeg', 'image/png', 'image/jpg').required(),
        destination: Joi.string().required(),
        filename: Joi.string().required(),
        path: Joi.string().required(),
        size: Joi.number().max(5242880).required()
    }).required()
})


/* G E T       B Y     I D       S C H E M A   */
export const getByIdSchema = Joi.object({
    id: Joi.string().hex().length(24).required()
})
/*U P D A T E       S U B C A T E G O R Y      S C H E M A */
export const updateSchema = Joi.object({
    id: Joi.string().hex().length(24).required(),
    title: Joi.string().min(3).max(20).required()
})

