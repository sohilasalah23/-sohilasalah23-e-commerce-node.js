import slugify from "slugify"

import { handleError } from "../../middleware/handleError.js"

import brandModel from "../../../database/models/brand.model.js";
import { deleteOne } from "../handlers/apiHandler.js";

/* A D D        S U B C A T E G O R Y */
const addBrand = handleError(async (req, res) => {
    req.body.slug = slugify(req.body.title)
    req.body.logo = req.file.filename
    let DOC = new brandModel(req.body)
    let added = await DOC.save()
    res.json({ message: "added", added })
})
/* G E T    A L L   S U B C A T E G O R Y*/
const getAllBrand = handleError(async (req, res) => {
    let allBrand = await brandModel.find()
    res.json({ message: "done", allBrand })
})
/* G E T      S U B C A T E G O R Y    B Y     I D   */
const getBrandById = handleError(async (req, res) => {
    let Brand = await brandModel.findById(req.params.id)
    Brand && res.json({ message: "done", Brand })
    !Brand && res.json({ message: "not found Brand" })
})
/*  U P D A T E       S U B C A T E G O R Y   */
const updateBrand = handleError(async (req, res) => {
    req.body.slug = slugify(req.body.title)
    if (req.file) req.body.logo = req.file.filename
    let updatedBrand = await brandModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    updatedBrand && res.json({ message: "done", updatedBrand })
    !updatedBrand && res.json({ message: "not found Brand" })
})
/*  D E L E T E        S U B C A T E G O R Y  */
const deleteBrand = deleteOne(brandModel)


















export {
    addBrand,
    updateBrand,
    deleteBrand,
    getAllBrand,
    getBrandById
}
