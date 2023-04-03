import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../utils/db"

export default async function name(req: NextApiRequest, res: NextApiResponse) {
  try {
    const files = await prisma.file.findMany()
    return res.status(200).json(files)
  } catch (error) {
    return res.status(500)
  }
}
