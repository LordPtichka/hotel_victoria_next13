import { FC, PropsWithChildren } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { IMeta } from "../seo/meta.interface"
import Meta from "../seo/Meta"

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Meta>
  )
}

export default Layout
