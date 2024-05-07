import slugify from "slugify"
import { handleError } from "../../middleware/handleError.js"
import ProductModel from "../../../database/models/product.model.js";
import { deleteOne } from "../handlers/apiHandler.js";

/* A D D        S U B C A T E G O R Y */
const addProduct = handleError(async (req, res) => {
    req.body.slug = slugify(req.body.title)
    req.body.imgCover = req.files.imgCover[0].filename
    req.body.images = req.files.images.map(ele => ele.filename)
    let DOC = new ProductModel(req.body)
    let added = await DOC.save()
    res.json({ message: "added", added })
})
/* G E T    A L L   S U B C A T E G O R Y*/
const getAllProduct = handleError(async (req, res) => {
    // 1-pagination
    let page = req.query.page * 1 || 1
    if (req.query.page <= 0) page = 1
    let skip = (page - 1) * 4
    // 2-filter 
    let filterObj = { ...req.query }
    let excludedQuary = ["page", "sort", "keyword", "fields"]
    excludedQuary.forEach((q) => {
        delete filterObj[q]
    })
    filterObj = JSON.stringify(filterObj)
    filterObj = filterObj.replace(/\bgt|gte|lt|lte\b/g, match => `$${match}`)
    filterObj = JSON.parse(filterObj)
    // 3-sort
    let mongooseQuery = ProductModel.find(filterObj).skip(skip).limit(4)
    if (req.query.sort) {
        let sortBy = req.query.sort.split(",").join(" ")
        mongooseQuery.sort(sortBy)
    }
    // 4-search
    if (req.query.keyword) {
        mongooseQuery.find({
            $or: [
                { title: { $regex: req.query.keyword, $options: "i" } },
                { description: { $regex: req.query.keyword, $options: "i" }, }
            ]
        })
    }
    // 3-fields
    if (req.query.fields) {
        let fields = req.query.fields.split(",").join(" ")
        mongooseQuery.sort(fields)
    }

    let allProduct = await mongooseQuery
    res.json({ message: "done", page, allProduct })
})
/* G E T      S U B C A T E G O R Y    B Y     I D   */
const getProductById = handleError(async (req, res) => {
    let Product = await ProductModel.findById(req.params.id)
    Product && res.json({ message: "done", Product })
    !Product && res.json({ message: "not found Product" })
})
/*  U P D A T E       S U B C A T E G O R Y   */
const updateProduct = handleError(async (req, res) => {
    req.body.slug = slugify(req.body.title)
    if (req.files.imgCover) req.body.imgCover = req.files.imgCover[0].filename
    if (req.files.images) req.body.images = req.files.images.map(ele => ele.filename)

    let updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    updatedProduct && res.json({ message: "done", updatedProduct })
    !updatedProduct && res.json({ message: "not found Product" })
})
/*  D E L E T E        S U B C A T E G O R Y  */
const deleteProduct = deleteOne(ProductModel)

















export {
    addProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
}
