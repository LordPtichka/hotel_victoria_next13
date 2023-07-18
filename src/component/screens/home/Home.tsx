import { FC } from "react"
import Layout from "../../layout/Layout"
import style from "./Home.module.scss" 
import Stocks from "./stocks/Stocks"

const Home: FC = () => {
  return (
    <Layout title="Home" description="Home">
        <Stocks />
    </Layout>
  )
}

export default Home
