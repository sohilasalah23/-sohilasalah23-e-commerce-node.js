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
    logo: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }


}, {
    timestamps: true
})
schema.post("init", function (doc) {
    doc.logo = process.env.BASEURL + "uploads/" + doc.logo
})
const brandModel = mongoose.model("Brand", schema)


export default brandModel 
