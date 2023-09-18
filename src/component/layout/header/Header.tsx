import Link from "next/link"
import { FC } from "react"
import style from "./Header.module.scss"
const Header: FC = () => {
  return (
    <div className={style.nav_wrap}>
      <nav className={style.nav_block}>
        <Link className={style.nav_link} href="/">Главная</Link>
        <Link className={style.nav_link} href="/rooms">Номера</Link>
        <Link className={style.nav_link} href="/">Контакты</Link>
        <Link className={style.nav_link} href="/restaurant/vkus">Рестораны</Link>
        <Link className={style.nav_link} href="/">Услуги</Link>
        <Link className={style.nav_link} href="/News">Новости</Link>
        <Link className={`${style.nav_link} ${style.btn_border}`} href="/Booking">Онлайн-бронирование</Link>
      </nav>
    </div>
  )
}

export default Header
