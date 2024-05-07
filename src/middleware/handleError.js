import { appError } from "../utils/appError.js"





export const handleError = (fn) => {
    return (req, res, next) => {
        fn(req, res).catch(err => next(new appError(err, 401)))
    }
}