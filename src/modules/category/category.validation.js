import Joi from "joi";




/*  A D D        C A T E G O R Y         S C H E M A */
export const addCategorySchema = Joi.object({
    title: Joi.string().min(3).max(20).required(),
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
/*U P D A T E         C A T E G O R Y         S C H E M A */
export const updateCategorySchema = Joi.object({
    id: Joi.string().hex().length(24).required(),
    title: Joi.string().min(3).max(20).required()
})

