import multer from "multer";
import fs from "fs";
import path from "path";

const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, name);
  },
});

export const uploadSingle = (fieldName) =>
  multer({ storage }).single(fieldName);
export const uploadMany = (fieldName) => multer({ storage }).array(fieldName);
