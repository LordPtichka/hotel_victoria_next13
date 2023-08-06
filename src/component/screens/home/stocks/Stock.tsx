import { FC, useState } from "react"
import style from "./Stocks.module.scss"
import { IStock, IStockDataSingle } from "@/interface/stock.interface"
import axios from "axios"
import { useRouter } from "next/router"

const Stock: FC<IStockDataSingle> = ({ stock }) => {
  const handleClick = async (id: string) => {
    console.log(id)
    const result = await axios.get(`http://localhost:4200/Stocks/DeleteStocks/${id}`)
    console.log(result.status) // Обработка полученных данных
  }

  const { pathname } = useRouter() // получаю имя ссылки из useRouter()

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <div className={style.offer}>
      <div className={style.img_for_offer} style={{ backgroundImage: `url(${stock.image})` }}>
        {pathname === "/CreateStocks" ? <button onClick={() => handleClick(stock.id)} className={style.btn_delete}></button> : ""}
      </div>

      <div className={style.info_block}>
        <div className={style.title_offer}>{stock.title}</div>
        {/* <div className={style.font_for_text}>{stock.description}</div> */}
        <textarea className={style.font_for_text} readOnly={true} value={stock.description} />
        <button onClick={handleOpenPopup}>Подробнее</button>
      </div>
    </div>
  )
}

export default Stock
