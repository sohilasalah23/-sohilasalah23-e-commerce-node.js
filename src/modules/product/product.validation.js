import Joi from "joi";




/*  A D D       S U B C A T E G O R Y         S C H E M A */
export const addSchema = Joi.object({
    title: Joi.string().min(3).max(20).required().trim(),
    description: Joi.string().min(3).max(200).required().trim(),
    price: Joi.number().min(0).required(),
    priceAfterDiscount: Joi.number().min(0).required(),
    quantity: Joi.number().min(1).required(),
    category: Joi.string().hex().length(24).required(),
    subcategory: Joi.string().hex().length(24).required(),
    Brand: Joi.string().hex().length(24).required(),
    createdBy: Joi.string().hex().length(24).optional(),
    imgCover: Joi.array().items(Joi.object({
        fieldname: Joi.string().required(),
        originalname: Joi.string().required(),
        encoding: Joi.string().required(),
        mimetype: Joi.string().valid('image/jpeg', 'image/png', 'image/jpg').required(),
        destination: Joi.string().required(),
        filename: Joi.string().required(),
        path: Joi.string().required(),
        size: Joi.number().max(5242880).required()
    }).required()).required(),
    images: Joi.array().items(Joi.object({
        fieldname: Joi.string().required(),
        originalname: Joi.string().required(),
        encoding: Joi.string().required(),
        mimetype: Joi.string().valid('image/jpeg', 'image/png', 'image/jpg').required(),
        destination: Joi.string().required(),
        filename: Joi.string().required(),
        path: Joi.string().required(),
        size: Joi.number().max(5242880).required()
    }).required()).required()
})


/* G E T       B Y     I D       S C H E M A   */
export const getByIdSchema = Joi.object({
    id: Joi.string().hex().length(24).required()
})
/*U P D A T E       S U B C A T E G O R Y      S C H E M A */
export const updateSchema = Joi.object({
    id: Joi.string().hex().length(24).required(),
    title: Joi.string().min(3).max(20).trim(),
    description: Joi.string().min(3).max(200).trim(),
    price: Joi.number().min(0),
    priceAfterDiscount: Joi.number().min(0),
    quantity: Joi.number().min(1),
    category: Joi.string().hex().length(24),
    subcategory: Joi.string().hex().length(24),
    Brand: Joi.string().hex().length(24),
    createdBy: Joi.string().hex().length(24).optional(),
    imgCover: Joi.array().items(Joi.object({
        fieldname: Joi.string(),
        originalname: Joi.string(),
        encoding: Joi.string(),
        mimetype: Joi.string().valid('image/jpeg', 'image/png', 'image/jpg'),
        destination: Joi.string(),
        filename: Joi.string(),
        path: Joi.string(),
        size: Joi.number().max(5242880)
    })),
    images: Joi.array().items(Joi.object({
        fieldname: Joi.string().required(),
        originalname: Joi.string().required(),
        encoding: Joi.string().required(),
        mimetype: Joi.string().valid('image/jpeg', 'image/png', 'image/jpg').required(),
        destination: Joi.string().required(),
        filename: Joi.string().required(),
        path: Joi.string().required(),
        size: Joi.number().max(5242880)
    }))
})

