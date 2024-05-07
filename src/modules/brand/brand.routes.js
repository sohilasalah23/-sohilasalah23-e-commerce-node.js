import express from "express";
import { addBrand, deleteBrand, getAllBrand, getBrandById, updateBrand } from "./brand.controller.js";
import { validation } from "../../middleware/validation.js";
import { addSchema, getByIdSchema, updateSchema } from "./brand.validation.js";
import { uploadSingle } from "../../utils/fileUpload.js";

const brandRoutes = express.Router()


brandRoutes.route("/")
    .post(uploadSingle('image'), validation(addSchema), addBrand)
    .get(getAllBrand)


brandRoutes.route("/:id")
    .get(validation(getByIdSchema), getBrandById)
    .patch(validation(updateSchema), updateBrand)
    .delete(validation(getByIdSchema), deleteBrand)








export default brandRoutes