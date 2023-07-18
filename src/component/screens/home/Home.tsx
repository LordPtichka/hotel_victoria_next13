import { FC } from "react"
import Layout from "../../layout/Layout"
import style from "./Home.module.scss" 
import Stocks from "./stocks/Stocks"

const Home: FC = () => {
  return (
    <Layout title="Home" description="Home">
        <Stocks />

        <section className={style.section_number_room} >
          <div className={style.block_number_room} >
            <div>
              <div className={style.number_room_title} >НОМЕРА</div>
              <div className={style.number_room_text} >К Вашему выбору Отель предлагает 63 просторных номеров, разных категорий. Звездное украшение коллекции Отеля - номера с лучшими террасами Петербурга, откуда открывается великолепный вид на панораму исторического центра города и Невский проспект.</div>
            </div>
            <div className={style.wrap_btn} >
              <button className={style.number_room_title_btn} >Все номера</button>
              <button className={style.number_room_title_btn} >Забронировать</button>
            </div>
          </div>
        </section>


        <section className={style.restaurant} >
          <div className={style.left_block} ></div>
          <div className={style.right_block} >
            <div className={style.number_room_title} >
              <div>РЕСТОРАН</div>
              <div>ВКУС</div>
            </div>
            <div className={style.number_room_text}>Открытая летняя терраса, с панорамным видом на историческую часть города. Закаты на нашей террасе особенно впечатляют. Обширная винная карта и обновленное меню, а также прекрасная пицца в неаполитанском стиле удовлетворят вкус любого гурмана.</div>
            <div>
              <div>
                <div>Время работы:</div>
                <div>Пн - Пт: 07:00 - 11:00</div>
                <div>Сб - Вс: 07:00 - 12:00</div>
              </div>
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </section>
    </Layout>


  )
}

export default Home
