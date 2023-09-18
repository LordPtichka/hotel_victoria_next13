import Link from "next/link"
import { FC } from "react"
import Image from "next/image"
import VictoriaLogo from "@/../public/Victoria_logo.svg"
import style from "./HeaderVideo.module.scss"

const HeaderVideo: FC = () => {
  return (
    <>
      <link rel="stylesheet" href="/header.css" />
      <header className="header-main">
        <video className={style.video_wallpaper} src={`http://${process.env.HOST}/video/video_promo.mp4`} loop muted playsInline></video>
        {/* autoPlay */}
        <div className="gradient">
          <nav className={`content ${style.nav}`}>
            <Link href={"/"}>
              <Image src={VictoriaLogo} alt="Picture of the author" />
            </Link>
            <ul className={`${style.ul_nav}`}>
              <li>
                <Link className={` ${style.nav_link}`} href="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link className={`${style.nav_link}`} href="/rooms">
                  Номера
                </Link>
              </li>
              <li>
                <Link className={` ${style.nav_link}`} href="/">
                  Контакты
                </Link>
              </li>
              <li>
                <Link className={` ${style.nav_link}`} href="/restaurant/vkus">
                  Рестораны
                </Link>
              </li>
              <li>
                <Link className={`${style.nav_link}`} href="/">
                  Услуги
                </Link>
              </li>
              <li>
                <Link className={` ${style.nav_link}`} href="/News">
                  Новости
                </Link>
              </li>
            </ul>
            <div>
              <Link className={` ${style.BTN_boking}`} href="/booking">
                Онлайн-бронирование
              </Link>
            </div>
          </nav>

          <section className={style.middle}>
            <div className={style.title}>
              <span className={`font-color-orange`}>Victoria</span>
              <span className={`font-color-white`}>
                {" "}
                - Будь в центре <br /> истории и комфорта
              </span>
            </div>

            <div>
              <Link href="/booking">
                <div className={`font-color-white ${style.button_booking}`} >Найти номер</div>
              </Link>
            </div>
          </section>
        </div>
      </header>
    </>
  )
}

export default HeaderVideo
