import slugify from "slugify"

import { handleError } from "../../middleware/handleError.js"
import subcategoryModel from "../../../database/models/subcategory.model.js";
import { deleteOne } from "../handlers/apiHandler.js";

/* A D D        S U B C A T E G O R Y */
const addsubCategory = handleError(async (req, res) => {
    console.log(req.file);
    req.body.slug = slugify(req.body.title)
    req.body.image = req.file.filename
    console.log(req.body.image);
    let DOC = new subcategoryModel(req.body)
    let added = await DOC.save()
    res.json({ message: "added", added })
})
/* G E T    A L L   S U B C A T E G O R Y*/
const getAllSubCategories = handleError(async (req, res) => {
    let filterObj = {}
    if (req.params.category) {
        filterObj.category = req.params.category
    }

    let allSubCategories = await subcategoryModel.find(filterObj)
    res.json({ message: "done", allSubCategories })
})
/* G E T      S U B C A T E G O R Y    B Y     I D   */
const getSubCategoryById = handleError(async (req, res) => {
    let subCategory = await subcategoryModel.findById(req.params.id)
    subCategory && res.json({ message: "done", subCategory })
    !subCategory && res.json({ message: "not found subcategory" })
})
/*  U P D A T E       S U B C A T E G O R Y   */
const updateSubCategory = handleError(async (req, res) => {
    req.body.slug = slugify(req.body.title)
    let updatedSubCategory = await subcategoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    updatedSubCategory && res.json({ message: "done", updatedSubCategory })
    !updatedSubCategory && res.json({ message: "not found subcategory" })
})
/*  D E L E T E        S U B C A T E G O R Y  */
const deleteSubCategory = deleteOne(subcategoryModel)


















export {
    addsubCategory,
    getAllSubCategories,
    getSubCategoryById,
    updateSubCategory,
    deleteSubCategory
}
