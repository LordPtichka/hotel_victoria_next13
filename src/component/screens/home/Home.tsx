import { FC, useEffect, useRef, useState } from "react"
import Layout from "../../layout/Layout"
import style from "./Home.module.scss"
import Stocks from "./stocks/Stock"
import { IStockData } from "@/interface/stock.interface"
import Rooms from "./rooms/Room"
import PopupStock from "./stocks/popup_stocks/PopupStock"
import { IRoomData } from "@/interface/room.interface"
import React from "react"
import { KeyObject } from "crypto"
import { ObjectFlags } from "typescript"
import Header from "@/component/layout/header/Header"

interface HomePageProps {
  stocksAll: IStockData
  roomAll: IRoomData
}

const Home: FC<HomePageProps> = ({ stocksAll, roomAll }) => {
  const [transformValue, setTransformValue] = useState(0)

  const indexWidth = 360

  let width = 330 * stocksAll.length + 35 * stocksAll.length

  const handlePrevSlide = () => {
    if (transformValue >= 0) return console.log(transformValue)
    setTransformValue((prevSlide) => prevSlide + indexWidth)
    console.log(transformValue)
    console.log(stocksAll.length)
  }
  const handleNextSlide = () => {
    if (transformValue <= indexWidth * (stocksAll.length - 2) * -1) return console.log(`${transformValue}, ${stocksAll.length}`)
    setTransformValue((prevSlide) => prevSlide - indexWidth)
  }

  const [popupImg, setPopupImg] = useState("")
  const [popupTitle, setPopupTitle] = useState("")
  const [popupDescription, setPopupDescription] = useState("")
  const [popupActive, setPopupActive] = useState("none")

  const handleClickAbout = async (stock) => {
    console.log(stock)
    setPopupImg(`${stock.image}`)
    setPopupTitle(stock.title)
    setPopupDescription(stock.description)

    setPopupActive("flex")
  }
  // =============================================
  // =============================================
  const handleClickClosePopup = (event) => {
    if (event.target.id == "PopupWrap") {
      setPopupActive("none")
    }
  }
  //================================================
  //================================================
  const [navActive, setNavActive] = useState("none")
  const targetRef = useRef(null) // Создаем ссылку (ref) для хранения ссылки на целевой DOM-элемент
  const [isIntersecting, setIsIntersecting] = useState(false) // Объявляем состояние для отслеживания пересечения целевого элемента с видимой областью

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        // Проверяем, есть ли у нас действительное значение в targetRef
        // const { top } = targetRef.current.getBoundingClientRect() // Получаем верхнюю позицию целевого элемента относительно видимой области
        const { bottom } = targetRef.current.getBoundingClientRect() // Получаем верхнюю позицию целевого элемента относительно видимой области
        const isVisible = bottom <= window.innerHeight // Проверяем, находится ли верхняя позиция в пределах высоты видимой области
        setIsIntersecting(isVisible) // Обновляем состояние isIntersecting на основе видимости
      }
    }
    window.addEventListener("scroll", handleScroll) // Добавляем слушатель события прокрутки
    handleScroll() // Вызываем handleScroll в начале для проверки видимости
    return () => {
      window.removeEventListener("scroll", handleScroll) // Очищаем слушатель события прокрутки при размонтировании компонента
    }
  }, []) // Пустой массив зависимостей означает, что этот эффект запускается только один раз после первого рендера

  useEffect(() => {
    if (isIntersecting) {
      console.log("Пользователь прокрутил до блока")
      setNavActive("block")
    } else {
      console.log("Пользователь прокрутил назад")
      setNavActive("none")
    }
  }, [isIntersecting]) // Запускаем этот эффект при каждом изменении isIntersecting
  //================================================
  //================================================
  return (
    <>
      <div style={{ display: `${navActive}` }}>
        <Header />
      </div>
      <Layout title="Home" description="Home">
        <script type="text/javascript" src="/travelline/head_script.js" defer></script>
        <script type="text/javascript" src="/travelline/search_form.js" defer></script>

        <section className="booking-block content">
          <div id="tl-search-form">&nbsp;</div>
        </section>

        {/* =========================== */}
        <section className={style.sectionStock}>
          <div className={style.title}>Акции</div>
          <div className={style.slider_block}>
            {stocksAll.length > 3 ? <button className={style.button} onClick={handlePrevSlide}></button> : <div></div>}
            <div className={style.slide_wrap}>
              <div className={style.cardStockWrap} style={{ transform: `translateX(${transformValue}px)`, width: `${width}px` }}>
                {stocksAll.length ? stocksAll.map((stock) => <Stocks key={stock.id} stock={stock} handleClickAbout={handleClickAbout} />) : <div>В данный момент акции не проводятся</div>}
              </div>
            </div>
            {stocksAll.length > 3 ? <button className={style.button} onClick={handleNextSlide}></button> : <div></div>}
          </div>
        </section>

        <Rooms roomAll={roomAll} />

        <section className={`${style.restaurant} ${style.section}`} ref={targetRef}>
          <div className={style.left_block} style={{ backgroundImage: `url(http://${process.env.HOST}/Vkys_bar.webp);` }}></div>
          <div className={style.right_block}>
            <div className={style.restaurant_title}>
              <div>РЕСТОРАН</div>
              <div className={style.mark_color}>ВКУС</div>
            </div>
            <div className={style.info_block}>
              Открытая летняя терраса, с панорамным видом на историческую часть города. Закаты на нашей террасе особенно впечатляют. Обширная винная карта и обновленное меню, а также прекрасная пицца
              в неаполитанском стиле удовлетворят вкус любого гурмана.
            </div>
            <div className={style.wrap_block}>
              <div>
                <div>Время работы:</div>
                <div className={style.time_block}>
                  <div>Пн - Пт: 07:00 - 11:00</div>
                  <div>Сб - Вс: 07:00 - 12:00</div>
                </div>
              </div>
              <div>
                <button className={style.btn}>Забронировать</button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================== */}
        <section className={`${style.service} ${style.section}`} ref={targetRef}>
          <div className={style.title_block}>Услуги</div>

          <div className={style.service_wrap}>
            <div className={style.service_block}>
              <div className={`${style.block_img} ${style.bathhouse}`} style={{ backgroundImage: `url(http://${process.env.HOST}/service/spa_service.webp)` }}>
                {" "}
              </div>
              <div className={style.block_service_info}>
                <div className={style.service_title}>Банный комплекс</div>
                <div className={style.block_info}>
                  <div className={style.service_info}>
                    Банный комплекс дарит красоту, молодость, здоровье и хорошее настроение! Это прежде всего, ни с чем несравнимое удовольствие, а также масса вариантов совместить приятный отдых с
                    полезными для здоровья процедурами!
                  </div>
                  <div className={style.btn}>Подробнее</div>
                </div>
              </div>
            </div>

            <div className={style.service_block}>
              <div className={`${style.block_img} ${style.fitnes}`} style={{ backgroundImage: `url(http://${process.env.HOST}/service/fitness_service.webp)` }}>
                {" "}
              </div>
              <div className={style.block_service_info}>
                <div className={style.service_title}>Фитнес-зал</div>
                <div className={style.block_info}>
                  <div className={style.service_info}>
                    В здании комплекса расположен тренажерный залплощадью 100 кв. м. Зал оснащен вытяжкой и кондиционерами,просторными раздевалками с душевыми и финской сауной.
                  </div>
                  <div className={style.btn}>Подробнее</div>
                </div>
              </div>
            </div>

            <div className={style.service_block}>
              <div className={`${style.block_img} ${style.conference}`} style={{ backgroundImage: `url(http://${process.env.HOST}/service/conference_service.webp)` }}>
                {" "}
              </div>
              <div className={style.block_service_info}>
                <div className={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
                <div className={style.block_info}>
                  <div className={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                  <div className={style.btn}>Подробнее</div>
                </div>
              </div>
            </div>

            <div className={style.service_block}>
              <div className={`${style.block_img} ${style.transfer}`} style={{ backgroundImage: `url(http://${process.env.HOST}/service/transfer-service.webp)` }}>
                {" "}
              </div>
              <div className={style.block_service_info}>
                <div className={style.service_title}>Трансфер</div>
                <div className={style.block_info}>
                  <div className={style.service_info}>
                    Теперь, чтобы организовать свою поездку, Вам всего лишь нужно уведомить ресепшн о времени своего отъезда, и наш опытный водитель будет ждать Вас в назначенное время.
                  </div>
                  <div className={style.btn}>Подробнее</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={style.contact}>
          <div className={style.title}>Контакты</div>
          <div className={style.info_block}>
            <div className={style.text}>Набережная 40-летия ВЛКСМ, д.1, г. Выборг, 188800,</div>
            <div className={style.text}>Ленинградская область, Российская Федерация.</div>
            <div className={style.text}>Отель находиться в исторической части города</div>
          </div>
          <div className={style.block_email}>
            <div className={style.text}>Почта для обращений:</div>
            <div className={`${style.text} ${style.email}`}>info@ibc-victoria.com</div>
          </div>
          <div className={style.btn}>Список контактов</div>
        </section>
      </Layout>
      {stocksAll.length ? stocksAll.map((stock) => <PopupStock key={stock.id} stock={stock} />) : <div></div>}

      <div className={style.popupWrap} id="PopupWrap" style={{ display: `${popupActive}` }} onClick={handleClickClosePopup}>
        <div className={style.popup}>
          <div className={style.popupImg} style={{ backgroundImage: `url(http://${process.env.HOST}/${popupImg})` }}>
            <button className={style.popupClose} onClick={() => setPopupActive("none")}></button>
          </div>
          <div className={style.popupData}>
            <div>{popupTitle}</div>
            <div>{popupDescription}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
