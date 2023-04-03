import { useState } from "react"
import Head from "next/head"
import Table from "../components/Table"
import New from "../components/New"
import Pagination from "../components/Pagination"
import { prisma } from "../utils/db"

export interface Props {
  files: {
    id: string
    name: string
    path: string
    size: number
    downloadCount: number
  }[]
}

export default function Home({ files }: Props) {
  const [displayForm, setDisplayForm] = useState(false)
  const [displayBtn, setDisplayBtn] = useState(true)
  const onClick = () => {
    setDisplayBtn(false)
    setDisplayForm(true)
  }
  return (
    <>
      <Head>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Deploy and download files" />
        <meta
          name="description"
          content="Deploying files to local storage and downloading them"
        />
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="/battle-dark.png"
          media="(prefers-color-scheme: light)"
        />
        <title>File Handling</title>
      </Head>

      <div className="mt-2">
        {displayBtn && (
          <button onClick={onClick} className="btn btn-outline">
            Add File
          </button>
        )}
        {displayForm && (
          <div className="mt-4">
            <New />
          </div>
        )}
        <Table files={files} />
        <Pagination />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const files = await prisma.file.findMany()

  return {
    props: {
      files,
    },
  }
}
