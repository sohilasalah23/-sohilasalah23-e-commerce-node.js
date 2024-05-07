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
    image: {
        type: String
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }


}, {
    timestamps: true
})
schema.post("init", function (doc) {
    doc.image = process.env.BASEURL + "uploads/" + doc.image
})
const categoryModel = mongoose.model("Category", schema)


export default categoryModel