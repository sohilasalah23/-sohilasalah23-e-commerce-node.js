import slugify from "slugify"
import categoryModel from "../../../database/models/category.model.js"
import { handleError } from "../../middleware/handleError.js"
import { deleteOne } from "../handlers/apiHandler.js"

/* A D D     C A T E G O R Y */
const addCategory = handleError(async (req, res) => {
    req.body.slug = slugify(req.body.title)
    req.body.image = req.file.filename
    let preCategory = new categoryModel(req.body)
    let addedCategory = await preCategory.save()
    res.json({ message: "added", addedCategory })
})
/* G E T    A L L     C A T E G O R Y */
const getAllCategories = handleError(async (req, res) => {
    let allCategories = await categoryModel.find()
    res.json({ message: "done", allCategories })
})
/* G E T      C A T E G O R Y     B Y     I D   */
const getCategoryById = handleError(async (req, res) => {
    let category = await categoryModel.findById(req.params.id)
    category && res.json({ message: "done", category })
    !category && res.json({ message: "not found category" })
})
/*  U P D A T E       C A T E G O R Y   */
const updateCategory = handleError(async (req, res) => {
    req.body.slug = slugify(req.body.title)
    let updatedCategory = await categoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    updatedCategory && res.json({ message: "done", updatedCategory })
    !updatedCategory && res.json({ message: "not found category" })
})
/*  D E L E T E        C A T E G O R Y  */
const deleteCategory = deleteOne(categoryModel)


















export {
    addCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}
