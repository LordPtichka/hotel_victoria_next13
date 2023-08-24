import { FC, PropsWithChildren } from "react"
import { useEffect, useRef } from "react"

import Header from "./header/Header"
import { useRouter } from "next/router"

import { IMeta } from "../seo/meta.interface"
import Meta from "../seo/Meta"

import style from "./Layout.module.scss"

import localFont from "@next/font/local" // импортим пакет
import Footer from "./footer/Footer"
import HeaderVideo from "./headerVideo/HeaderVideo"

// ===========================
// ===========================
const myFontFors = localFont({
  src: [
    {
      path: "../../../public/fonts/Fors/ForsLight.ttf",
      weight: "300",
      style: "normal",
    },
  ],
})
const myFontRamillas = localFont({
  src: [
    {
      path: "../../../public/fonts/Ramillas/RamillasMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Ramillas/RamillasBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
})
// ===========================
// ===========================
const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  const { pathname } = useRouter() // получаю имя ссылки из useRouter()

  return (
    <Meta title={title} description={description}>
      {pathname === "/" ? <HeaderVideo /> : <Header />} {/* если ссылка / то вывожу видео */}
      <main className={style.main}>{children}</main>
      <Footer />
    </Meta>
  )
}

export default Layout
