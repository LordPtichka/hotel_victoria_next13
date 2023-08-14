import CreateStocks from "@/component/screens/create-stocks/CreateStocks"
import { IStockData } from "@/interface/stock.interface"

import { StocksService } from "@/services/stocks.service"
import { GetStaticProps, NextPage } from "next"

const CreateNewsPage: NextPage<IStockData> = ({ stocksAll }) => {
  return <CreateStocks stocksAll={stocksAll} />
}

// ===================================
// получение данных с внешнего сервера и их прокидка на клиента
export const getStaticProps: GetStaticProps<IStockData> = async () => {
  const stocksAll = await StocksService.getStocks()

  return {
    props: { stocksAll },
    revalidate: 60,
  }
}
// ===================================

export default CreateNewsPage
