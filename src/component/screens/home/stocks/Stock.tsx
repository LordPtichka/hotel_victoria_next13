import { FC } from "react"
import style from "./Stocks.module.scss"
import { IStock, IStockDataSingle } from "@/interface/stock.interface"
import axios from "axios"

const Stock: FC<IStockDataSingle> = ({ stock }) => {
  const handleClick = async () => {
    // try {
    // const re = await axios.get("http://localhost:4200/Stocks/DeleteStocks/2")
    const { stock_ } = await axios.get(`http://localhost:4200/Stocks/DeleteStocks/2`)
    // console.log(response.data) // Обработка полученных данных
    // } catch (error) {
    // console.error(error)
    // }
  }

  // async getStocks() {
  //   // const { data } = await axios.get<IStock[]>(`${API_URL}/stocks`)
  //   const { data } = await axios.get<IStock[]>(`${API_URL}/Stocks/AllStocks`)
  //   return data
  // }

  return (
    <div>
      <div className={style.offer}>
        <div className={style.img_for_offer} style={{ backgroundImage: `url(${stock.img})` }}></div>
        <div className={style.title_offer}>{stock.title}</div>
        <div className={style.font_for_text}>{stock.description}</div>

        {/* <button onClick={handleClick}>удалить акцию</button> */}
      </div>
    </div>
  )
}

export default Stock
