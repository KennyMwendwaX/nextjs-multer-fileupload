import multer from "multer"
import { NextApiRequest, NextApiResponse } from "next"
import nc from "next-connect"
import { prisma } from "../../../utils/db"

interface Request extends NextApiRequest {
  file: any
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = nc<Request, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).end("Server Error!")
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found")
  },
})

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    return cb(null, "./public/uploads")
  },
  filename: function (req, file, cb) {
    return cb(null, file.originalname)
  },
})

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.split("/")[1] === "pdf") {
//     cb(null, true);
//   } else {
//     cb(new Error("Not a PDF File!!"), false);
//   }
// };

const upload = multer({
  storage: storage,
  // fileFilter: fileFilter,
})
const uploadFile = upload.single("file")

handler.use(uploadFile)

handler.post(async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405)
  }

  const filePath = `uploads/${req.file.filename}`

  await prisma.file.create({
    data: {
      name: req.file.filename,
      path: filePath,
      size: req.file.size,
    },
  })
  res.status(201)
})

export default handler
