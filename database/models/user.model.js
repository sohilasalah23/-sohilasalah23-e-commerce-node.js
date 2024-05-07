import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minLength: [2, "firstName is too short"],
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enums: ["User", "Company_HR"],
        default: "User"
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isVerfied: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

const userModel = mongoose.model("user", schema)



export default userModel