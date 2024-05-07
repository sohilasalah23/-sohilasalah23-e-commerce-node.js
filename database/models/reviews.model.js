import mongoose from "mongoose";




const schema = new mongoose.schema({
    Text: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }


}, {
    timestamps: true
})

const reviewModel = mongoose.model("Review", schema)


export default reviewModel 
