import multer from "multer"

export const Storage = multer.diskStorage({
    destination: "upload/",
    filename(_, file, callback) {
        callback(null, file.originalname.split(".")[0] + ".js");
    },
})