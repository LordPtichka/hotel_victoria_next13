import { FC } from "react"
import style from "./Room.module.scss"
import { IRoom, IRoomData } from "@/interface/room.interface"
import Link from "next/link"

interface block {
  roomAll: IRoom
  handleClickAbout: (event: React.MouseEvent<HTMLButtonElement>) => void
}
 
const Rooms: FC<block> = ({ roomAll, handleClickAbout }) => {
  return (
    <section className={`${style.section_number_room} ${style.section}`}>
      <div className={style.block_left}>
        {/* <div className={style.info_block}> */}
        <div className={style.number_room_title}>НОМЕРА</div>
        <div className={style.number_room_text}>
          К Вашему выбору предлагает 63 номера, разных категорий. Расположенных в историческом центре Выборга, в непосредственной близости от Выборгского замка и старого города. 
          Номера с видом на замок и набережную.
        </div>
        <div className={style.wrap_btn}>
          <button className={style.btn}>Все номера</button>
            {/* <Link href={"/Booking"}> */}
          <button className={style.btn}>Забронировать</button>
          {/* </Link> */}
        </div>
        {/* </div> */}
      </div>

      <div className={style.block_right}>
        <div className={style.slide_wrap}>
          {roomAll.map((room) => (
            <div key={room.id} className={style.card_room} onClick={() => handleClickAbout(room)}>
              <div
                className={`${style.gradient_bg}`}
                style={{
                  backgroundImage: `url(http://${process.env.HOST}/room/${room.image})`,
                }}
                >
                <div className={style.info_block}>
                  <div className={style.card_title} dangerouslySetInnerHTML={{ __html: room.category }}></div>
                  <div className={style.card_price} dangerouslySetInnerHTML={{ __html: room.price }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
