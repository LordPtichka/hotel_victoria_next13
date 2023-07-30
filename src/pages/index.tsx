import { GetStaticProps, NextPage } from "next"
import Home from "@/component/screens/home/Home"
import { IStockData } from "@/interface/stock.interface"
import { StocksService } from "@/services/stocks.service"

const HomePage: NextPage<IStockData> = ({ stocksAll }) => {
  return <Home stocksAll={stocksAll} />
}

export const getStaticProps: GetStaticProps<IStockData> = async () => {
  const stocksAll = await StocksService.getStocks()
  return {
    props: { stocksAll },
    revalidate: 60,
  }
}

export default HomePage
