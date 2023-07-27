import Link from "next/link"
import { FC } from "react"

const HeaderVideo: FC = () => {
  return (
    <>
      <link rel="stylesheet" href="/header.css" />
      <header className="header-main">
        <video src="/video/video_promo.mp4" loop autoPlay></video>
        <script type="text/javascript" src="travelline/head_script.js" defer></script>
        <script type="text/javascript" src="/travelline/search_form.j" defer></script>
        <div className="gradient">
          <nav className="nav-line content">
            <ul className="ul-nav">
              <li className="li-nav">
                <Link className="nav-link font-for-link font-color-white" href="/">
                  Главная
                </Link>
              </li>
              <li className="li-nav">
                <Link className="nav-link font-for-link font-color-white" href="/">
                  Номера
                </Link>
              </li>
              <li className="li-nav">
                <Link className="nav-link font-for-link font-color-white" href="/">
                  Контакты
                </Link>
              </li>
              <li className="li-nav">
                <Link className="nav-link font-for-link font-color-white" href="/">
                  Рестораны
                </Link>
              </li>
              <li className="li-nav">
                <Link className="nav-link font-for-link font-color-white" href="/">
                  Услуги
                </Link>
              </li>
              <li className="li-nav">
                <Link className="nav-link font-for-link font-color-white" href="/News">
                  Новости
                </Link>
              </li>
              <li className="li-nav">
                <Link className="button btn-for-nav font-for-text font-color-white" href="/">
                  Онлайн-бронирование
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <section className="booking-block content">
          <div id="tl-search-form">&nbsp;</div>
        </section>
      </header>
    </>
  )
}

export default HeaderVideo
