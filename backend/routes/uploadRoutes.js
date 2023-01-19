import path from 'path';
import express from 'express';
import multer from 'multer';

const router = express.Router();

// find this in multer documentation

//initialising storage engine
const storage = multer.diskStorage({
  destination(req, file, cb) {
    // we callback cb, null- no error, "uploads/"-where we want to upload
    cb(null, 'uploads/');
  },
  // filename
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// checks the file type
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
}

//what we are going to pass in as middleware to our route
const upload = multer({
  // it allows us to upload any type of file which we do not want to do
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
