import mongoose from "mongoose";




const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: [3, "title is too short"],
    },
    slug: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, "title is too short"],
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    priceAfterDiscount: {
        type: Number,
        min: 0,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    subcategory: {
        type: mongoose.Types.ObjectId,
        ref: "subcategory"
    },
    Brand: {
        type: mongoose.Types.ObjectId,
        ref: "Brand"
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    imgCover: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    sold: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    ratecount: Number,
    rateAvg: {
        type: Number,
        min: 0,
        max: 5
    },


}, {
    timestamps: true
})
schema.post("init", function (doc) {
    doc.imgCover = process.env.BASEURL + "uploads/" + doc.imgCover
    doc.images = doc.images.map(ele => process.env.BASEURL + "uploads/" + ele)
})
const ProductModel = mongoose.model("Product", schema)


export default ProductModel 
