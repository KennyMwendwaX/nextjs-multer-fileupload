import Nav from "./Nav"

export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 pt-16 pb-2 overflow-hidden">
        {children}
      </div>
    </>
  )
}
