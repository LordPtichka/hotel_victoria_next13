import { FC, useState } from "react"
import style from "./Stocks.module.scss"
import { IStock, IStockDataSingle } from "@/interface/stock.interface"
import axios from "axios"
import { useRouter } from "next/router"
import React from "react"
import CreateStocks from "../../create-stocks/CreateStocks"

interface block {
  stock: IStock
  handleClickAbout: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Stock: FC<block> = ({ stock, handleClickAbout }) => {
  // const handleClickAbout = async (id: number) => {
  //   console.log(stock)
  // }

  const handleClickDelite = async (id: string) => {
    console.log(id)
    const result = await axios.get(`http://${process.env.HOST}/Stocks/DeleteStocks/${id}`)
    console.log(result.status) // Обработка полученных данных
  }

  const { pathname } = useRouter() // получаю имя ссылки из useRouter()

  const [dataCard, setData] = useState("111")

  return (
    <>
      <div className={style.offer}>
        <div className={style.img_for_offer} style={{ backgroundImage: `url(http://${process.env.HOST}/${stock.image})` }}>
          {pathname === "/create/stock" ? (
            <>
              <button onClick={() => handleClickDelite(stock.id)} className={style.btn_delete}></button>
              <button onClick={() => handleData(stock)} className={style.btn_change}>
                Изменить
              </button>
              {/* <CreateStocks dataCard={dataCard} /> */}
            </>
          ) : (
            ""
          )}
        </div>

        <div className={style.info_block}>
          <div className={style.title_offer}>{stock.title}</div>
          {/* <div className={style.font_for_text}>{stock.description}</div> */}
          <textarea className={style.font_for_text} readOnly={true} value={stock.description} />
          <button className={style.more_btn} onClick={() => handleClickAbout(stock)}>
            Подробнее
          </button>
        </div>
      </div>
    </>
  )
}

export default Stock
