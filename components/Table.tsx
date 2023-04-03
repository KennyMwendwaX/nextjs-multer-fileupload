import TableRow from "./TableRow"
import { Props } from "../pages/index"

export default function Table({ files }: Props) {
  return (
    <div className="mt-4">
      <p>File list</p>
      <div className="overflow-x-auto">
        <table className="table table-normal static w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>File Name</th>
              <th>File Size</th>
              <th>Download Count</th>
              <th>Download</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <TableRow key={file.id} index={index + 1} file={file} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
