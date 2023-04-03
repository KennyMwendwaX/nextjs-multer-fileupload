import Link from "next/link"
import Image from "next/image"
import { FaSearch } from "react-icons/fa"
import Icon from "../public/icons.png"

export default function Nav() {
  return (
    <>
      <div className="navbar fixed bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link href="/">
            <div className="btn btn-ghost normal-case text-xl">
              <Image src={Icon} className="h-6 w-6" alt="" />
              Iconic
            </div>
          </Link>
        </div>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square text-lg bg-slate-900">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
