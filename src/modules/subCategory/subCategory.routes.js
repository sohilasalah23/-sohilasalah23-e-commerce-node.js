import express from "express";
import { addsubCategory, deleteSubCategory, getAllSubCategories, getSubCategoryById, updateSubCategory } from "./subCategory.controller.js";
import { validation } from "../../middleware/validation.js";
import { addSchema, getByIdSchema, updateSchema } from "./subCategory.validation.js";
import { uploadSingle } from "../../utils/fileUpload.js";

const subCategoryRoutes = express.Router({ mergeParams: true })


subCategoryRoutes.route("/")
    .post(uploadSingle('image'), validation(addSchema), addsubCategory)
    .get(getAllSubCategories)


subCategoryRoutes.route("/:id")
    .get(validation(getByIdSchema), getSubCategoryById)
    .patch(validation(updateSchema), updateSubCategory)
    .delete(validation(getByIdSchema), deleteSubCategory)








export default subCategoryRoutes