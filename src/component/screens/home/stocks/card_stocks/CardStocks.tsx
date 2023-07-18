import { FC } from 'react'
import style from "./CardStocks.module.scss"
const CardStocks: FC = () => {
  return (
    <div className={style.offer}>
        <div className={style.img_for_offer}></div>
        <div className={style.title_offer}>ГАСТРОУЖИН 27 МАЯ – ЗАПУСК НОВОГО МЕНЮ</div>
        <div className={style.font_for_text}>27 мая в 19:00 в стенах ресторана “Монрэпа” пройдет гастроужин Запускаем новое меню от шеф – повара Константина Ивлева. В программе 5 курсов блюд и идеально подобранные напитки.</div>
    </div>
  )
}

export default CardStocks