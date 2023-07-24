import { FC } from "react"
import Layout from "../../layout/Layout"
import style from "./Home.module.scss"
import Stocks from "./stocks/Stock"
import { IStockData } from "@/interface/stock.interface"

const Home: FC<IStockData> = ({ stocksAll }) => {
  return (
    <Layout title="Home" description="Home">
      {/* http://localhost:4200/video/video_promo.mp4 */}

      {/* ================================================================== */}
      {/* <header classNameName="header-main"><video src="/static/video/video_promo.mp4" autoplay="" loop=""></video> */}
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

      {/* ================================================================== */}

      {/* <Stocks /> */}

      <section>
        <div classNameName={style.title}>Акции</div>
        {stocksAll.length ? stocksAll.map((stock) => <Stocks key={stock.id} stock={stock} />) : <div>News Not Found</div>}
      </section>

      <section classNameName={`${style.section_number_room} ${style.section}`}>
        <div classNameName={style.block_number_room}>
          <div>
            <div classNameName={style.number_room_title}>НОМЕРА</div>
            <div classNameName={style.number_room_text}>
              К Вашему выбору Отель предлагает 63 просторных номеров, разных категорий. Звездное украшение коллекции Отеля - номера с лучшими террасами Петербурга, откуда открывается великолепный вид
              на панораму исторического центра города и Невский проспект.
            </div>
          </div>
          <div classNameName={style.wrap_btn}>
            <button classNameName={style.btn}>Все номера</button>
            <button classNameName={style.btn}>Забронировать</button>
          </div>
        </div>
      </section>

      <section classNameName={`${style.restaurant} ${style.section}`}>
        <div classNameName={style.left_block}></div>
        <div classNameName={style.right_block}>
          <div classNameName={style.restaurant_title}>
            <div>РЕСТОРАН</div>
            <div classNameName={style.mark_color}>ВКУС</div>
          </div>
          <div classNameName={style.number_room_text}>
            Открытая летняя терраса, с панорамным видом на историческую часть города. Закаты на нашей террасе особенно впечатляют. Обширная винная карта и обновленное меню, а также прекрасная пицца в
            неаполитанском стиле удовлетворят вкус любого гурмана.
          </div>
          <div classNameName={style.wrap_block}>
            <div>
              <div>Время работы:</div>
              <div>Пн - Пт: 07:00 - 11:00</div>
              <div>Сб - Вс: 07:00 - 12:00</div>
            </div>
            <div>
              <button classNameName={style.btn}>Забронировать</button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================== */}
      <section classNameName={`${style.service} ${style.section}`}>
        <div classNameName={style.title_block}>Услуги</div>

        <div classNameName={style.service_wrap}>
          <div classNameName={style.service_block_one}>
            <div classNameName={style.block_img}> </div>
            <div classNameName={style.block_service_info}>
              <div classNameName={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
              <div classNameName={style.block_info}>
                <div classNameName={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                <div classNameName={style.btn}>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>

          <div classNameName={style.service_block_one}>
            <div classNameName={style.block_img}> </div>
            <div classNameName={style.block_service_info}>
              <div classNameName={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
              <div classNameName={style.block_info}>
                <div classNameName={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                <div classNameName={style.btn}>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>

          <div classNameName={style.service_block_one}>
            <div classNameName={style.block_img}> </div>
            <div classNameName={style.block_service_info}>
              <div classNameName={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
              <div classNameName={style.block_info}>
                <div classNameName={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                <div classNameName={style.btn}>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>

          <div classNameName={style.service_block_one}>
            <div classNameName={style.block_img}> </div>
            <div classNameName={style.block_service_info}>
              <div classNameName={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
              <div classNameName={style.block_info}>
                <div classNameName={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                <div classNameName={style.btn}>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
