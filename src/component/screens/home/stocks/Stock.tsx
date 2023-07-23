import { FC } from "react"
import style from "./Stocks.module.scss"
import { IStockDataSingle } from "@/interface/stock.interface"

const Stock: FC<IStockDataSingle> = ({ stock }) => {
  return (
    <div>
      <div className={style.offer}>
        <div className={style.img_for_offer} style={{ backgroundImage: `url(${stock.image})` }}></div>
        <div className={style.title_offer}>{stock.title}</div>
        <div className={style.font_for_text}>{stock.description}</div>
      </div>
    </div>
  )
}

export default Stock
