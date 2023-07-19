import Link from "next/link"
import { FC } from "react"
import style from "./Header.module.scss"
const Header: FC = () => {
  return (
    <div className={style.nav_wrap}>
      <nav className={style.nav_block}>
        <Link className={style.nav_link} href="/">Главная</Link>
        <Link className={style.nav_link} href="/">Номера</Link>
        <Link className={style.nav_link} href="/">Контакты</Link>
        <Link className={style.nav_link} href="/">Рестораны</Link>
        <Link className={style.nav_link} href="/">Услуги</Link>
        <Link className={style.nav_link} href="/news">Новости</Link>
        <Link className={`${style.nav_link} ${style.btn_border}`} href="/">Онлайн-бронирование</Link>
      </nav>
    </div>
  )
}

export default Header
