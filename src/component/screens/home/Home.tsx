import { FC } from "react"
import Layout from "../../layout/Layout"
import style from "./Home.module.scss" 
import Stocks from "./stocks/Stocks"

const Home: FC = () => {
  return (
    <Layout title="Home" description="Home">

      {/* http://localhost:4200/video/video_promo.mp4 */}

      {/* ================================================================== */}
      {/* <header className="header-main"><video src="/static/video/video_promo.mp4" autoplay="" loop=""></video> */}
        <div className="gradient">
            <nav className="nav-line content">
                <ul className="ul-nav">
                    <li className="li-nav"><a href="/" className="nav-link font-for-link font-color-white">Главная</a></li>
                    <li className="li-nav"><a href="/rooms" className="nav-link font-for-link font-color-white">Номера</a></li>
                    <li className="li-nav"><a href="#contact" className="nav-link font-for-link font-color-white">Контакты</a></li>
                    <li className="li-nav"><a href="#restaurant" className="nav-link font-for-link font-color-white">Рестораны</a></li>
                    <li className="li-nav"><a href="#service" className="nav-link font-for-link font-color-white">Услуги</a></li>
                    <a href="/booking" className="button btn-for-nav font-for-text font-color-white">Онлайн-бронирование</a>
                </ul>
            </nav>
        </div>
        
        <section className="booking-block content">
            {/* <div id="tl-search-form"><div style="line-height: 0; width: 100%;"><iframe id="tlFrame0.2360282354837624" name="tlFrame0.2360282354837624" frameborder="0" border="0" allowtransparency="yes" width="1" height="90" scrolling="no" style="max-width: none; min-width: 100%; width: 1px; height: 90px;"></iframe></div></div> */}
        </section>
    </header>
      {/* ================================================================== */}
      <Stocks />

      <section className={`${style.section_number_room} ${style.section}`} >
        <div className={style.block_number_room} >
          <div>
            <div className={style.number_room_title} >НОМЕРА</div>
            <div className={style.number_room_text} >К Вашему выбору Отель предлагает 63 просторных номеров, разных категорий. Звездное украшение коллекции Отеля - номера с лучшими террасами Петербурга, откуда открывается великолепный вид на панораму исторического центра города и Невский проспект.</div>
          </div>
          <div className={style.wrap_btn} >
            <button className={style.btn} >Все номера</button>
            <button className={style.btn} >Забронировать</button>
          </div>
        </div>
      </section>


      <section className={`${style.restaurant} ${style.section}`} >
        <div className={style.left_block} ></div>
        <div className={style.right_block} >
          <div className={style.restaurant_title} >
            <div>РЕСТОРАН</div>
            <div className={style.mark_color} >ВКУС</div>
          </div>
          <div className={style.number_room_text}>Открытая летняя терраса, с панорамным видом на историческую часть города. Закаты на нашей террасе особенно впечатляют. Обширная винная карта и обновленное меню, а также прекрасная пицца в неаполитанском стиле удовлетворят вкус любого гурмана.</div>
          <div className={style.wrap_block} >
            <div>
              <div>Время работы:</div>
              <div>Пн - Пт: 07:00 - 11:00</div>
              <div>Сб - Вс: 07:00 - 12:00</div>
            </div>
            <div>
              <button className={style.btn} >Забронировать</button>
            </div>
          </div>
        </div>
      </section>

{/* ==================================== */}
      <section  className={`${style.service} ${style.section}`} >

        <div className={style.title_block}>Услуги</div>
        
        <div className={style.service_wrap}>

          <div className={style.service_block_one}>
            <div className={style.block_img}> </div>
            <div className={style.block_service_info}>
              <div className={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
              <div className={style.block_info}>
                <div className={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                <div className={style.btn}>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>

          <div className={style.service_block_one}>
            <div className={style.block_img}> </div>
            <div className={style.block_service_info}>
              <div className={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
              <div className={style.block_info}>
                <div className={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                <div className={style.btn}>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>

          <div className={style.service_block_one}>
            <div className={style.block_img}> </div>
            <div className={style.block_service_info}>
              <div className={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
              <div className={style.block_info}>
                <div className={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                <div className={style.btn}>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>
          
          <div className={style.service_block_one}>
            <div className={style.block_img}> </div>
            <div className={style.block_service_info}>
              <div className={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
              <div className={style.block_info}>
                <div className={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                <div className={style.btn}>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>


         
        </div>

      </section>
    </Layout>


  )
}

export default Home
