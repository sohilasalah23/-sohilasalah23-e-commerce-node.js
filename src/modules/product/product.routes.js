import express from "express";
import { validation } from "../../middleware/validation.js";
import { addSchema, getByIdSchema, updateSchema } from "./product.validation.js";
import { uploadFields } from "../../utils/fileUpload.js";
import { addProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from "./product.controller.js";

const productRoutes = express.Router()


productRoutes.route("/")
    .post(uploadFields([{ name: "imgCover", maxCount: 1 }, { name: "images", maxCount: 10 }]), validation(addSchema), addProduct)
    .get(getAllProduct)


productRoutes.route("/:id")
    .get(validation(getByIdSchema), getProductById)
    .patch(uploadFields([{ name: "imgCover", maxCount: 1 }, { name: "images", maxCount: 10 }]), validation(updateSchema), updateProduct)
    .delete(validation(getByIdSchema), deleteProduct)









export default productRoutes