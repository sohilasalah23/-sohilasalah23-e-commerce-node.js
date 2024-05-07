import { handleError } from "../../middleware/handleError.js"

export const deleteOne = (model) => {
    return handleError(async (req, res) => {
        let deletedSubCategory = await model.findByIdAndDelete(req.params.id)
        deletedSubCategory && res.json({ message: "deleted", deletedSubCategory })
        !deletedSubCategory && res.json({ message: "not found subcategory" })
    })
}