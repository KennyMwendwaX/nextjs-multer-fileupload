import { prisma } from "../../../utils/db"
import fs from "fs"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handleDelete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fileId = req.query.id as string

  try {
    const file = await prisma.file.findFirst({
      where: {
        id: fileId,
      },
    })
    if (!file) return res.status(404)
    fs.unlinkSync(`public/${file.name}`) // delete file from public folder
    await prisma.file.delete({ where: { id: fileId } }) // delete file from database
    res.status(200)
  } catch (error) {
    res.status(500)
  }
}
