import React, { useState } from "react"
import { useRouter } from "next/router"

export default function New() {
  const [file, setFile] = useState("")
  const router = useRouter()

  const onChange = (e: any) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append("file", file)

    await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData,
    })
    // assign a result then reload
    // router.reload()
  }

  return (
    <>
      <h1>ADD your files</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          className="file-input file-input-bordered file-input-outline w-full max-w-sm ml-2"
          onChange={onChange}
          required
        />
        <br />
        <button
          type="submit"
          className="btn btn-outline w-full max-w-sm ml-2 mt-3">
          Upload
        </button>
      </form>
    </>
  )
}
