import mongoose from "mongoose";




const schema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    discount: {
        type: Number,
        min: 0
    },
    expires: Date


}, {
    timestamps: true
})

const couponModel = mongoose.model("Coupon", schema)


export default couponModel 
