import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { IMeta } from "./meta.interface"

const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>Victoria - официальный сайт отеля</title>
      </Head>
      {children}
    </>
  )
}

export default Meta
