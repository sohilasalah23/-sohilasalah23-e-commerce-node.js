import mongoose from "mongoose";




const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, "title is too short"],
        unique: true
    },
    slug: {
        type: String,
        required: true,
        lowercase: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    image: {
        type: String
    }

}, {
    timestamps: true
})
schema.post("init", function (doc) {
    doc.image = process.env.BASEURL + "uploads/" + doc.image
})

const subcategoryModel = mongoose.model("subcategory", schema)


export default subcategoryModel 
