import { prisma } from "../../../utils/db"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handleDownloadCount(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fileId = req.query.id as string
  try {
    const file = await prisma.file.findUnique({
      where: {
        id: fileId,
      },
    })
    if (!file) return res.status(404)
    await prisma.file.update({
      where: {
        id: fileId,
      },
      data: {
        downloadCount: file.downloadCount++,
      },
    })
    return res.status(200)
  } catch (error) {
    return res.status(500)
  }
}
