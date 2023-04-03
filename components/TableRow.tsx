import Router from "next/router"
import { FaTrash } from "react-icons/fa"
import { HiDownload } from "react-icons/hi"
import formatBytes from "../utils/formatBytes"

interface Props {
  file: {
    id: string
    name: string
    path: string
    size: number
    downloadCount: number
  }
  index: number
}

export default function TableRow({ file, index }: Props) {
  const handleDelete = async (fileId: string) => {
    await fetch(`/api/delete/${fileId}`, {
      method: "DELETE",
    })
  }

  const handleDownload = async (fileId: string) => {
    // const response = await fetch(`/api/download/?id=${file.id}`, {
    //   method: "PUT",
    // })
    // if (response.status === 200) {
    //   // Redirect user to file url download
    //   Router.push(file.path)
    // }
    Router.push(file.path)
  }
  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{file.name}</td>
        <td>{formatBytes(file.size)}</td>
        <td>{file.downloadCount}</td>
        <td className="cursor-pointer text-xl">
          <button onClick={() => handleDownload(file.id)}>
            <HiDownload />
          </button>
        </td>
        <td className="cursor-pointer">
          <button onClick={() => handleDelete(file.id)}>
            <FaTrash />
          </button>
        </td>
      </tr>
    </>
  )
}
