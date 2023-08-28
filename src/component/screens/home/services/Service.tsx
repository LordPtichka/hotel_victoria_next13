import { FC } from "react"
import style from "./Service.module.scss"
import { IService, IServiceData } from "@/interface/service.interface"

interface block {
  serviceAll: IService
  handleClickAbout: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Services: FC<block> = ({ serviceAll, handleClickAbout }) => {
  return (
    <section className={`${style.section_number_service} ${style.section}`}>
      <div className={style.service_block}>
        <div className={`${style.block_img} ${style.transfer}`} style={{ backgroundImage: `url(http://${process.env.HOST}/service/transfer-service.webp)` }}>
          {" "}
        </div>
        <div className={style.block_service_info}>
          <div className={style.service_title}>Трансфер</div>
          <div className={style.block_info}>
            <div className={style.service_info}>
              Теперь, чтобы организовать свою поездку, Вам всего лишь нужно уведомить ресепшн о времени своего отъезда, и наш опытный водитель будет ждать Вас в назначенное время.
            </div>
            <div className={style.btn}>Подробнее</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
