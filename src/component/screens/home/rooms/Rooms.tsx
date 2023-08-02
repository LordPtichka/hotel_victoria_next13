import { FC } from "react"
import style from "./Rooms.module.scss"

const Rooms: FC = () => {
  return (
    <section className={`${style.section_number_room} ${style.section}`}>
      <div className={style.block_left}>
        <div className={style.info_block}>
          <div className={style.number_room_title}>НОМЕРА</div>
          <div className={style.number_room_text}>
            К Вашему выбору Отель предлагает 63 просторных номеров, разных категорий. Звездное украшение коллекции Отеля - номера с лучшими террасами Петербурга, откуда открывается великолепный вид на
            панораму исторического центра города и Невский проспект.
          </div>
          <div className={style.wrap_btn}>
            <button className={style.btn}>Все номера</button>
            <button className={style.btn}>Забронировать</button>
          </div>
        </div>
      </div>

      <div className={style.block_right}>
        <div className={style.card_room}>
          <div className={style.gradient_bg}>
            <div className={style.info_block}>
              <div className={style.card_title}>Стандарт</div>
              <div className={style.card_price}>от 4350 руб.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms
