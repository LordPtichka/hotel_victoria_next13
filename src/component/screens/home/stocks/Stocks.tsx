import { FC } from 'react'
import style from "./Stocks.module.scss"
import CardStocks from './card_stocks/CardStocks'

const Stocks: FC = () => {
  return (
    <section>
        <div className={style.title}>Акции</div>
        <div>
            <CardStocks />
        </div>
    </section>
  )
}

export default Stocks