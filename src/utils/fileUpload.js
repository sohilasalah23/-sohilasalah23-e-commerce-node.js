import mongoose from "mongoose";
import { appError } from "./appError.js";
import multer from "multer";
const uploadFile = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "uploads");
        },
        filename: (req, file, cb) => {
            cb(null, new mongoose.Types.ObjectId() + "-" + file.originalname);
        },
    });
    function fileFilter(req, file, cb) {
        if (file.mimetype.startsWith("image")) {
            cb(null, true);
        } else {
            cb(new appError("image only", 401), false);
        }
    }
    const upload = multer({ storage, fileFilter });

    return upload;
};


export const uploadSingle = (filedName) => uploadFile().single(filedName);
export const uploadArray = (filedName) => uploadFile().array(filedName, 10);
export const uploadFields = (filedName) => uploadFile().fields(filedName);
