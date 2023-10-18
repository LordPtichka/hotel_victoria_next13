import { FC, useEffect, useState } from "react"
import style from "./RoomCard.module.scss"
import { IRoom, IRoomData } from "@/interface/room.interface"
import Link from "next/link"

interface block {
  roomAll: IRoom
  handleClickAbout: (event: React.MouseEvent<HTMLButtonElement>) => void
}
 
const RoomCard: FC<block> = ({ roomAll, handleClickAbout }) => {



  const imagePars = (room) => {
    const imagePreview = room.imageName.split(" &&%&& ")[0]
    return imagePreview
  }


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
          <Link className={style.btn} rel="stylesheet" href="/rooms" >Все номера</Link>
          <Link className={style.btn} rel="stylesheet" href="/booking" >Забронировать</Link>
          {/* </Link> */}
        </div>
      </div>

      <div className={style.block_right}>
        <div className={style.slide_wrap}>
          {roomAll.map((room) => ( 

            <div key={room.id} className={style.card_room} onClick={() => handleClickAbout(room) }>
              
              <div
                className={`${style.gradient_bg}`}
                style={{
                  backgroundImage: `url(http://${process.env.HOST}/room/${imagePars(room)})`,
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

export default RoomCard
