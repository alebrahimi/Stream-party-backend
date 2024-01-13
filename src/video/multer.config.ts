import * as multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/'); // Specify the upload directory
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

export const multerConfig = {
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10000 * 5, // 5 GB limit (adjust as needed)
  },
};
