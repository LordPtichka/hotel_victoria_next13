import { FC } from "react"
import style from "./Stocks.module.scss"
import { IStock, IStockDataSingle } from "@/interface/stock.interface"
import axios from "axios"

const Stock: FC<IStockDataSingle> = ({ stock }) => {
  const handleClick = async (id: string) => {
    console.log(id)
    const result = await axios.get(`http://localhost:4200/Stocks/DeleteStocks/${id}`)
    console.log(result.status) // Обработка полученных данных
  }

  return (
    <div className={style.offer}>
      <div className={style.img_for_offer} style={{ backgroundImage: `url(${stock.img})` }}></div>
      <div className={style.title_offer}>{stock.title}</div>
      <div className={style.font_for_text}>{stock.description}</div>

      <button onClick={() => handleClick(stock.id)}>удалить акцию</button>
    </div>
  )
}

export default Stock
