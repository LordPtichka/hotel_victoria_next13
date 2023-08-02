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
          <nav className="nav-line content">
            <ul className="ul-nav">
              <li className="li-nav">
                <Image
                  src={VictoriaLogo}
                  alt="Picture of the author"
                  // width={500} automatically provided
                  // height={500} automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </li>
              <li className="li-nav">
                <Link className={`nav-link font-for-link font-color-white ${style.nav_video}`} href="/">
                  Главная
                </Link>
              </li>
              <li className="li-nav">
                <Link className={`nav-link font-for-link font-color-white ${style.nav_video}`} href="/">
                  Номера
                </Link>
              </li>
              <li className="li-nav">
                <Link className={`nav-link font-for-link font-color-white ${style.nav_video}`} href="/">
                  Контакты
                </Link>
              </li>
              <li className="li-nav">
                <Link className={`nav-link font-for-link font-color-white ${style.nav_video}`} href="/">
                  Рестораны
                </Link>
              </li>
              <li className="li-nav">
                <Link className={`nav-link font-for-link font-color-white ${style.nav_video}`} href="/">
                  Услуги
                </Link>
              </li>
              <li className="li-nav">
                <Link className={`nav-link font-for-link font-color-white ${style.nav_video}`} href="/News">
                  Новости
                </Link>
              </li>
              <li className="li-nav">
                <Link className="button btn-for-nav font-for-text font-color-white" href="/Booking">
                  Онлайн-бронирование
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* <section className="booking-block content">
          <div id="tl-search-form">&nbsp;</div>
        </section> */}
      </header>
    </>
  )
}

export default HeaderVideo
