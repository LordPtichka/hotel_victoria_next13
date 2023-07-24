import { FC } from 'react'

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
                <a href="{% url 'home' %}" className="nav-link font-for-link font-color-white">
                  Главная
                </a>
              </li>
              <li className="li-nav">
                <a href="{% url 'rooms' %}" className="nav-link font-for-link font-color-white">
                  Номера
                </a>
              </li>
              <li className="li-nav">
                <a href="#contact" className="nav-link font-for-link font-color-white">
                  Контакты
                </a>
              </li>
              <li className="li-nav">
                <a href="#restaurant" className="nav-link font-for-link font-color-white">
                  Рестораны
                </a>
              </li>
              <li className="li-nav">
                <a href="#service" className="nav-link font-for-link font-color-white">
                  Услуги
                </a>
              </li>
              <a href="{% url 'booking' %}" className="button btn-for-nav font-for-text font-color-white">
                Онлайн-бронирование
              </a>
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