import { FC } from "react"
import style from "./Footer.module.scss"
import Link from "next/link"
import Image from "next/image"
import TelegramLogo from "@/../public/icon/Telegram.svg"
import VkLogo from "@/../public/icon/vk.svg"
import WhatsappLogo from "@/../public/icon/Whatsapp.svg"

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <section className={style.footer_top}>
        <div className={style.link_block}>
          <div className={style.footer_nav_block}>
            <div className={`${style.footer_link} ${style.footer_nav_title}`}>ОТЕЛЬ</div>
            <div className={style.footer_link_block}>
              <Link href={"/"} className={style.footer_link}>
                Номера
              </Link>
              <Link href={"/"} className={style.footer_link}>
                Банный комплекс
              </Link>
              <Link href={"/"} className={style.footer_link}>
                Бронирование
              </Link>
            </div>
          </div>

          <div className={style.footer_nav_block}>
            <div className={`${style.footer_link} ${style.footer_nav_title}`}>Номера</div>
            <div className={style.footer_link_block}>
              <Link href={"/"} className={style.footer_link}>
                Стандарт
              </Link>
              <Link href={"/"} className={style.footer_link}>
                Полулюкс
              </Link>
              <Link href={"/"} className={style.footer_link}>
                Люкс
              </Link>
              <Link href={"/"} className={style.footer_link}>
                Пред. люкс
              </Link>
              <Link href={"/"} className={style.footer_link}>
                Делюкс
              </Link>
              <Link href={"/"} className={style.footer_link}>
                Аппартаменты
              </Link>
            </div>
          </div>

          <div className={style.footer_nav_block}>
            <div className={`${style.footer_link} ${style.footer_nav_title}`}>РЕСТОРАНЫ</div>
            <div className={style.footer_link_block}>
              <Link href={"/"} className={style.footer_link}>
                Ресторан Вкус
              </Link>
              <Link href={"/"} className={style.footer_link}>
                Ресторан Монрэпа
              </Link>
            </div>
          </div>

          <div className={style.footer_nav_block}>
            <div className={`${style.footer_link} ${style.footer_nav_title}`}>Дополнительно</div>
            <div className={style.footer_link_block}>
              <Link href={"/"} className={style.footer_link}>
                info@ibc-victoria.com
              </Link>
              <Link href={"/"} className={style.footer_link}>
                г. Выборг, наб. 40-летия ВЛКСМ, д.1
              </Link>
              <Link href={"/"} className={style.footer_link}>
                8 (800) 500-51-74
              </Link>
              <Link href={"/"} className={style.footer_link}>
                8 (800) 100-51-66
              </Link>
            </div>
          </div>
        </div>

        <div className={style.footer_nav_block}>
          <div className={`${style.footer_link} ${style.footer_nav_title}`}> </div>
          <div className={`${style.footer_link_block}`}>
            <Link href={"/"} className={`${style.footer_link} ${style.footer_icon}`}>
              <Image src={VkLogo} alt="Vk" />
            </Link>
            <Link href={"/"} className={`${style.footer_link} ${style.footer_icon}`}>
              <Image src={TelegramLogo} alt="Telegram" />
            </Link>
            <Link href={"/"} className={`${style.footer_link} ${style.footer_icon}`}>
              <Image src={WhatsappLogo} alt="Whatsapp" />
            </Link>
          </div>
        </div>
      </section>

      <section className={style.footer_two}>
        <Link target="_blank" className={style.w_40} href={"http://192.168.10.26:4200/file/politika-konfidencialnosti.pdf"}>
          © Victoria business hotel 2009 - 2023
        </Link>
        <Link href={"/"}>
          <Image className="logo_svg" src="../logo_in_footer.svg" alt="" width={80} height={75} />
        </Link>
        <Link target="_blank" className={`${style.w_40} ${style.text_end}`} href={"http://192.168.10.26:4200/file/polzovatelskoe-soglashenie.pdf"}>
          Правовая информация
        </Link>
      </section>
    </footer>
  )
}

export default Footer
