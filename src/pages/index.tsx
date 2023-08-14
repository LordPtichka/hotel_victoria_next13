import { GetStaticProps, NextPage } from "next"
import Home from "@/component/screens/home/Home"
import { IStockData } from "@/interface/stock.interface"
import { StocksService } from "@/services/stocks.service"
import { IRoomData } from "@/interface/room.interface"
import { RoomsService } from "@/services/rooms.service"

const HomePage: NextPage<IStockData, IRoomData > = ({ stocksAll }) => {
  return <Home stocksAll={stocksAll} />
}

export const getStaticProps: GetStaticProps<IStockData IRoomData> = async () => {
  const stocksAll = await StocksService.getStocks()
  const roomAll = await RoomsService.getRooms()
  return {
    props: { stocksAll, roomAll },
    revalidate: 60,
  }
}

export default HomePage
