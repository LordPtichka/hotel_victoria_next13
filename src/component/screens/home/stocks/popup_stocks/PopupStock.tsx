import { FC } from "react"
import style from "./PopupStock.module.scss"
import { IStock, IStockDataSingle } from "@/interface/stock.interface"
import axios from "axios"
import { useRouter } from "next/router"

const PopupStock: FC<IStockDataSingle> = ({ stock }) => {
  const handleClick = async (id: string) => {
    console.log(id)
    const result = await axios.get(`http://localhost:4200/Stocks/DeleteStocks/${id}`)
    console.log(result.status) // Обработка полученных данных
  }

  const { pathname } = useRouter() // получаю имя ссылки из useRouter()

  return (
    <div className={style.background_popup}>
      <div className={style.offer}>
        <div className={style.img_for_offer} style={{ backgroundImage: `url(${stock.image})` }}>
          {pathname === "/CreateStocks" ? <button onClick={() => handleClick(stock.id)} className={style.btn_delete}></button> : ""}
        </div>

        <div className={style.info_block}>
          <div className={style.title_offer}>{stock.title}</div>
          {/* <div className={style.font_for_text}>{stock.description}</div> */}
          <textarea className={style.font_for_text} readOnly={true} value={stock.description} />
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  )
}

export default PopupStock
