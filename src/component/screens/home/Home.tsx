import { FC, useEffect, useRef, useState } from "react"
import Layout from "../../layout/Layout"
import style from "./Home.module.scss"
import Stocks from "./stocks/Stock"
import { IStockData } from "@/interface/stock.interface"
import Rooms from "./rooms/Room"
import { IRoomData } from "@/interface/room.interface"
import React from "react"
import Header from "@/component/layout/header/Header"
import Travelline from "./travelline/travelline"
import Link from "next/link"


interface HomePageProps {
  stocksAll: IStockData
  roomAll: IRoomData
}

const Home: FC<HomePageProps> = ({ stocksAll, roomAll }) => {
  const [transformValue, setTransformValue] = useState(0)

  const indexWidth = 360

  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(330 * stocksAll.length + 35 * stocksAll.length)
  }, [stocksAll])
  // const width = 330 * stocksAll.length + 35 * stocksAll.length

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

  // =====> POPUP <======> POPUP <=======> POPUP <======
  // =====> POPUP <======> POPUP <=======> POPUP <======
  const stylePopup = {
    transform: "translateY(0px)",
    transition: "600ms",
    zIndex: "6",
    display: "none",
  }
  const [popupImg, setPopupImg] = useState("")
  const [popupTitle, setPopupTitle] = useState("")
  const [popupDescription, setPopupDescription] = useState("")
  const [popupCategory, setPopupCategory] = useState("")
  const [popupPrice, setPopupPrice] = useState("")
  const [popupActive, setPopupActive] = useState(stylePopup)

  const handleClickAbout = async (data) => {
    if (data.category != undefined) {
      setPopupImg(`room/${data.image}`)
    } else {
      setPopupImg(data.image)
    }
    setPopupTitle(replaceNewlinesWithBreaks(data.title))
    setPopupDescription(replaceNewlinesWithBreaks(data.description))
    setPopupCategory(data.category)
    setPopupPrice(data.price)

    stylePopup.display = "flex"
    // const stylePopup = {
    //   transform: "translateY(0px)",
    //   transition: "600ms",
    //   zIndex: "6",
    //   display: "flex",
    // }
    setPopupActive(stylePopup)
  }
  function replaceNewlinesWithBreaks(text) {
    return text.replace(/\n/g, '<br />');
  }
  // =============================================
  // =============================================
  const handleClickClosePopup = (event) => {
    if (event.target.id == "PopupWrap" || event.target.id == "BtnPopupClose") {
      stylePopup.display = "none"
      setPopupActive(stylePopup)
    } 
  }

  //================================================
  //================================================
  //======> NAV <=========> NAV <======> NAV <======
  //======> NAV <=========> NAV <======> NAV <======
  const styleActive = {
    position: "fixed",
    width: "100%",
    transform: "translateY(-300px)",
    transition: "600ms",
    zIndex: "6",
  }

  const [navActive, setNavActive] = useState(styleActive)
  const targetRef = useRef(null) // Создаем ссылку (ref) для хранения ссылки на целевой DOM-элемент
  const [isIntersecting, setIsIntersecting] = useState(false) // Объявляем состояние для отслеживания пересечения целевого элемента с видимой областью

  console.log(isIntersecting)
  // console.log(targetRef)

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const { bottom } = targetRef.current.getBoundingClientRect() // Получаем нижнюю позицию целевого элемента относительно видимой области
        const isVisible = bottom <= window.innerHeight // Проверяем, находится ли верхняя позиция в пределах высоты видимой области
        setIsIntersecting(isVisible) // Обновляем состояние isIntersecting на основе видимости
        console.log(isVisible)
      }
    }
    window.addEventListener("scroll", handleScroll) // Добавляем слушатель события прокрутки
    // handleScroll() // Вызываем handleScroll в начале для проверки видимости
    
    const interval = setInterval(() => {
      return () => {
        window.removeEventListener("scroll", handleScroll) // Очищаем слушатель события прокрутки при размонтировании компонента
      }
    }, 0)
  }, []) // Пустой массив зависимостей означает, что этот эффект запускается только один раз после первого рендера
  //  ==========================
  useEffect(() => {
    if (isIntersecting) {
      console.log("Пользователь прокрутил до блока")
      const styleActive = {
        position: "fixed",
        width: "100%",
        transform: "translateY(10px)",
        transition: "600ms",
        zIndex: "6",
      }
      setNavActive(styleActive)
    } else {
      console.log("Пользователь прокрутил назад")
      const styleActive = {
        position: "fixed",
        width: "100%",
        transform: "translateY(-300px)",
        transition: "600ms",
        zIndex: "6",
      }
      // styleActive.transform = "translateY(-300px)"
      setNavActive(styleActive)
    }
  // }, [isIntersecting]) // Запускаем этот эффект при каждом изменении isIntersecting
  }, [isIntersecting]) // Запускаем этот эффект при каждом изменении isIntersecting
  //================================================
  //================================================

  return (
    <>
      <div style={navActive}>
        <Header />
      </div>
      <Layout title="Home" description="Home">
        <Travelline />

        {/* =========================== */}
        <section className={style.sectionStock} ref={targetRef}>
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

        <Rooms roomAll={roomAll} handleClickAbout={handleClickAbout} />

        <section className={`${style.restaurant} ${style.section}`}>
          <div className={style.left_block} style={{ backgroundImage: `url(http://${process.env.HOST}/Vkys_bar.webp)` }}></div>
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
              <div className={style.btn_reservation}>
                <Link href={"/restaurant/vkus"}>
                  <button className={style.btn}>Забронировать</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================== */}
        <section className={`${style.service} ${style.section}`}>
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
                  <Link href={"/"}>
                    <div className={style.btn_more}>Подробнее</div>
                  </Link>
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
                  <Link href={"/"}>
                    <div className={style.btn_more}>Подробнее</div>
                  </Link>
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
                  <Link href={"/"}>
                    <div className={style.btn_more}>Подробнее</div>
                  </Link>
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
                  <Link href={"/"}>
                    <div className={style.btn_more}>Подробнее</div>
                  </Link>
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
            <div className={`${style.text} ${style.email}`}><a href="mailto:info@ibc-victoria.com">info@ibc-victoria.com</a></div>
          </div>
          <Link href={"/"}>
            <div className={style.btn_contact_list}>Список контактов</div>
          </Link>
        </section>
      </Layout>

      <div className={style.popupWrap} id="PopupWrap" style={popupActive} onClick={handleClickClosePopup}>
        <div className={style.popup}>
          <div className={style.popupImg} style={{ backgroundImage: `url(http://${process.env.HOST}/${popupImg})` }}>
            <button className={style.popupClose} id="BtnPopupClose" onClick={handleClickClosePopup}></button>
          </div>
          <div className={style.popupData}>
            <div className={`${style.textareaPopup} ${style.popupTitle}`}>{popupTitle}</div>
            {popupDescription != null ?
            <div dangerouslySetInnerHTML={{ __html: popupDescription }} ></div> : ""
            }
            {popupCategory != null ?
            <div dangerouslySetInnerHTML={{ __html: popupCategory }} ></div>: ""
            }
            {popupPrice != null ?
            <div dangerouslySetInnerHTML={{ __html: popupPrice }} ></div>: ""
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
