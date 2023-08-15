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
        <video src="/video/video_promo.mp4" loop muted playsInline></video>
        {/* autoPlay */}
        {/* <script type="text/javascript" src="travelline/head_script.js" defer></script>
        <script type="text/javascript" src="/travelline/search_form.js" defer></script> */}
        <div className="gradient">
          <nav className={`content ${style.nav}`}>
            <Link href={"/"}>
              <Image src={VictoriaLogo} alt="Picture of the author" />
            </Link>
            <ul className={`${style.ul_nav}`}>
              <li>
                <Link className={`font-for-link font-color-white ${style.nav_link}`} href="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link className={`font-for-link font-color-white ${style.nav_link}`} href="/">
                  Номера
                </Link>
              </li>
              <li>
                <Link className={`font-for-link font-color-white ${style.nav_link}`} href="/">
                  Контакты
                </Link>
              </li>
              <li>
                <Link className={`font-for-link font-color-white ${style.nav_link}`} href="/">
                  Рестораны
                </Link>
              </li>
              <li>
                <Link className={`font-for-link font-color-white ${style.nav_link}`} href="/">
                  Услуги
                </Link>
              </li>
              <li>
                <Link className={`font-for-link font-color-white ${style.nav_link}`} href="/News">
                  Новости
                </Link>
              </li>
            </ul>
            <div>
              <Link className={`button font-for-text font-color-white ${style.BTN_boking}`} href="/Booking">
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
              <Link className={`font-color-white ${style.button_booking}`} href="/booking">
                Найти номер
              </Link>
            </div>
          </section>
        </div>

        {/* <section className="booking-block content">
          <div id="tl-search-form">&nbsp;</div>
        </section> */}
      </header>
    </>
  )
}

export default HeaderVideo
