import Layout from '@/component/layout/Layout'
import RoomCard from '@/component/rooms_block/RoomCard'
import { IRoomData } from '@/interface/room.interface'
import { FC, useState } from 'react'
import style from './RoomsPage.module.scss' 


const Rooms: FC<IRoomData> = ({roomAll}) => {

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
  const [imageNameArr, setImageNameArr] = useState([])
  // ==========================================================
  // ==========================================================
  // ==========================================================
  const handleClickAbout = async (data) => {
    if (data.category != undefined) {
      setPopupImg(`room/${data.imageName}`)
    } else {
      setPopupImg(data.imageName)
    }
    setPopupTitle(replaceNewlinesWithBreaks(data.title))
    setPopupDescription(replaceNewlinesWithBreaks(data.description))
    setPopupCategory(data.category)
    setPopupPrice(data.price)

    stylePopup.display = "flex"
    setPopupActive(stylePopup)

    // для попапа номера
    // парсинг адресов картинок
    console.log(data)
    if (data.category) {
      console.log(data.imageName)
      setImageNameArr(data.imageName.split(" &&%&& "))
      console.log(imageNameArr)
    }

  }
  function replaceNewlinesWithBreaks(text) {
    return text.replace(/\n/g, '<br />');
  }





  const handleClickClosePopup = (event) => {
    if (event.target.id == "PopupWrap" || event.target.id == "BtnPopupClose") {
      stylePopup.display = "none"
      setPopupImg("")
      setPopupTitle("")
      setPopupDescription("")
      setPopupCategory("")
      setPopupPrice("")
      setPopupActive(stylePopup)
      setImageNameArr([])
      // setSlideTransformPopup(0)
    } 
  }


  return (
    <>
      <Layout title="Наши номера">
        <section style={{paddingTop: "150px"}}>
          <RoomCard roomAll={roomAll} handleClickAbout={handleClickAbout} />
        </section>
      </Layout>

      <div className={style.popupWrap} id="PopupWrap" style={popupActive} onClick={handleClickClosePopup}>
        <div className={style.popup}>


          {popupCategory ? 
            <div className={style.popupSlide}>
              <div className={style.btnWrap}>
                <div className={style.btnPrev} style={{display: `${slideBtnPrevSlide}`}} onClick={popupHandlePrevSlide}></div>
                <div className={style.btnNext} style={{display: `${slideBtnNextSlide}`}} onClick={popupHandleNextSlide}></div>
              </div>

              <div className={style.slideVisibleBlock}>
                <div className={style.slideImgWrap} style={{transform: `translateX(${slideTransformPopup}px)`}}>
                  {imageNameArr.length ? imageNameArr.map((element, index) => (
                      <div className={style.imageSlideRoom} key={index} style={{ backgroundImage: `url(http://${process.env.HOST}/room/${element})` }}></div>
                  )) : null}
                </div>
              </div>
            </div>
            :
            <div className={style.popupImg} style={{ backgroundImage: `url(http://${process.env.HOST}/${popupImg})` }}>
              <button className={style.popupClose} id="BtnPopupClose" onClick={handleClickClosePopup}></button>
            </div>
          }
          
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




          {/* <div className={style.slideVisibleBlock}>
            <div className={style.slideImgWrap}>
              {imageNameArr.length ? imageNameArr.map((element, index) => (
                  <div className={style.imageSlideRoom} key={index} style={{ backgroundImage: `url(http://${process.env.HOST}/room/${element})` }}></div>
              )) : null}
            </div>
          </div> */}



        </div>
      </div> 

    </>
  )
}



export default Rooms