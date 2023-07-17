import { FC } from "react"
import style from './Footer.module.scss'
import Link from "next/link"
const Footer: FC = () => {
  return (
    <footer>
      <section className={style.footer_top}>
        <div className={style.footer_nav_block}>

          <div className={`${style.footer_link} ${style.footer_nav_title}`}>ОТЕЛЬ</div>
          <div className={style.footer_link_block}>
            <Link href={"/"} className={style.footer_link}>Номера</Link>
            <Link href={"/"} className={style.footer_link}>Бронирование</Link>
            <Link href={"/"} className={style.footer_link}>Банный комплекс</Link>
          </div>      
        </div>
      </section>
    </footer>
  )
}

export default Footer
