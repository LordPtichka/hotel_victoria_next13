import { FC } from "react"
import style from "./Footer.module.scss"
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

        <div className={style.footer_nav_block}>
          <div className={`${style.footer_link} ${style.footer_nav_title}`}>РЕСТОРАНЫ</div>
          <div className={style.footer_link_block}>
            <Link href={"/"} className={style.footer_link}>Ресторан Вкус</Link>
            <Link href={"/"} className={style.footer_link}>Ресторан Монрэпа</Link>
          </div>
        </div>

        <div className={style.footer_nav_block}>
          <div className={`${style.footer_link} ${style.footer_nav_title}`}>ДОПОЛНИТЕЛЬНО</div>
          <div className={style.footer_link_block}>
            <Link href={"/"} className={style.footer_link}>Контакты</Link>
            <Link href={"/"} className={style.footer_link}>Бронирование</Link>
          </div>
        </div>

        <div className={style.footer_nav_block}>
          <div className={`${style.footer_link} ${style.footer_nav_title}`}></div>
          <div className={style.footer_link_block}>
            <Link href={"/"} className={style.footer_link}>reservation@ibc-victoria.com</Link>
            <Link href={"/"} className={style.footer_link}>г. Выборг, наб. 40-летия ВЛКСМ, д.1</Link>
          </div>
        </div>

        <div className={style.footer_nav_block}>
          <div className={`${style.footer_link} ${style.footer_nav_title}`}></div>
          <div className={style.footer_link_block}>
            <Link href={"/"} className={style.footer_link}>8 (800) 500-51-74</Link>
            <Link href={"/"} className={style.footer_link}>8 (800) 100-51-66</Link>
          </div>
        </div>
        
      </section>

      <section>
        <div className={style.block_line} ></div>
      </section>
    </footer>
  )
}

export default Footer
