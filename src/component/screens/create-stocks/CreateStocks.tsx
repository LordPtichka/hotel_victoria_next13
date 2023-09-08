import Layout from "@/component/layout/Layout"
import axios from "axios"
import { IStockData } from "@/interface/stock.interface"
import { FC, MouseEvent, useState } from "react"
import Stock from "../home/stocks/Stock"
import style from "./CreateStocks.module.scss"

const CreateStocks: FC<IStockData> = ({ stocksAll, dataCard }) => {
  // Состояния для хранения данных формы
  const [stock, setStocks] = useState(stocksAll) // Состояние для хранения всех
  const [title, setTitle] = useState("") // Состояние для хранения заголовка
  const [description, setDescription] = useState("") // Состояние для хранения описания
  const [id, setId] = useState("") // Состояние для хранения id
  const [previewImage, setPreviewImage] = useState(null) // состояние для превью картинки
  const [imageName, setImageName] = useState("") // Состояние для хранения выбранного изображения
  const [image, setImage] = useState<File | null>(null) // Состояние для хранения выбранного изображения

  // =======================================================================
  // ====> вывод превью картинки <=============> вывод превью картинки <====
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader() // Создаем новый экземпляр объекта FileReader
    reader.onloadend = () => {setPreviewImage(reader.result)} // Устанавливаем результат чтения файла в переменную previewImage
    reader.readAsDataURL(file) // Читаем содержимое файла и преобразуем его в Data URL
  }
  // =======================================================================
  // ====> DELETE <=================================> DELETE <==============

  const handleClickDelete = async (data) => {
    console.log(data.id)
    const result = await axios.get(`http://${process.env.HOST}/Stocks/DeleteStocks/${data.id}`)
    console.log(result.status) // Обработка полученных данных
    const newStocks = stock.filter((stock) => stock.id !== data.id)
    setStocks(newStocks)
  }
  // =======================================================================
  // ====> UPDATE <=================================> UPDATE <==============
  // перенос значений из карточки в форму для последующего редактирования
  const handleDataUpdate = async (data: {}) => {
    setTitle(data.title)
    setDescription(data.description)
    setImageName(data.imageName)
    setPreviewImage(`http://${process.env.HOST}/${data.imageName}`)
    setId(data.id)
  }
  // =======================================================================
  // ====> CREATE <=================================> CREATE <==============
  // Обработчик события при нажатии на кнопку "создать статью"
  const createStocks = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      // Создание нового объекта FormData
      const formData = new FormData()
      formData.append("title", title)
      formData.append("description", description)
      formData.append("id", id)
      formData.append("image", image as File)
      if (image) formData.append("imageName", image.name)
      const formDataObject = {}
      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value
      }

      // =========================================
      // Отправка данных на сервер с помощью axios
      if (id > 0) { // Действия при редактировании карточки
        await axios.post(`http://${process.env.HOST}/Stocks/update/${id}`, formDataObject) // отправка данных
        if (image != null) { // если есть новое изображение то оно отправится на сервер 
          await axios.post(`http://${process.env.HOST}/Stocks/upload`, formData) // отправка данных
        }
        // ====> изменение данных карточки на стороне клиента <====
        const updateLoacalCard = stock.find(data => data.id == id) // изменил данные карточки в локальном состоянии
        console.log(updateLoacalCard)

        updateLoacalCard.title = title
        updateLoacalCard.description = description 
        if(formDataObject.imageName) updateLoacalCard.imageName = formDataObject.imageName

        console.log(updateLoacalCard)

        // ===========================



      } else { // Действия при создании карточки
        console.log(formDataObject.image)
        const result =  await axios.post(`http://${process.env.HOST}/Stocks/Create`, formDataObject) // отправка данных
        if (image != null) {
          await axios.post(`http://${process.env.HOST}/Stocks/upload`, formData) // отправка данных
        }
        setStocks([...stock, { id: result.data.id + 1, title,description , imageName: `${formDataObject.imageName}` }])
      }
      // сброс полей в форме
      setTitle("")
      setDescription("")
      setPreviewImage(null)
      setImage(null)
      setImageName(null)
      setId("")

    } catch (error) { 
      console.error(error)
    }
  }


// =============================================
// ====> RESET DATA <=========> RESET DATA <====
  const resetData = async() => {
    setTitle("")
    setDescription("")
    setImage(null)
    setImageName("")
    setPreviewImage(null)
    setId("")
  }
  // ===========================================
  // ===========================================

  return (
    <Layout title={"create"}>
      <div style={{ paddingTop: "130px" }}></div>

      <form className={style.form}>
        <div className={style.card_create_wrap}>
          <div className={style.offer}>
            <div className={style.img_for_offer} style={{ backgroundImage: `url(${previewImage})` }}></div>
            <div className={style.info_block}>
              <div className={style.title_offer}>
                <div className={`${style.input} ${style.title_offer}`}> {title}</div>
              </div>
              <div className={` ${style.font_for_text}`}> {description} </div>
            </div>
          </div>

          {/* ============================== */}
          {/* <div className={style.full_card}> */}
          <div className={`${style.offer} ${style.full_card}`}>
            <div className={style.img_for_offer} style={{ backgroundImage: `url(${previewImage})` }}>
              <input
                type="file"
                placeholder="title"
                accept="image/*"
                onChange={(e) => {
                  setImage(e.target.files?.[0])
                  handleImageChange(e)
                }}
              />
            </div>

            <div className={style.info_block}>
              <div className={style.title_offer}>
                <textarea className={`${style.input} ${style.title_offer}`} placeholder="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
                <textarea
                  className={`${style.input} ${style.font_for_text}`}
                  placeholder="description"
                  value={description}
                  // onKeyDown={handleKeyDown}
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                />

            </div>
          </div>
          {/* </div> */}
        </div>
        <input type="" value={id}/>
        <button onClick={createStocks}>создать статью</button>
      </form>
      <button onClick={resetData}>сброс</button>
      <div>==============================</div>

      {/* Отображение списка скидок */}
      <div className={style.card_wrap}>{stock.length ? stock.map((stock) => <Stock key={stock.id} stock={stock}  handleDataUpdate={handleDataUpdate} handleClickDelete={handleClickDelete}/>) : <div>В данный момент акции не проводятся</div>}</div>
    </Layout>
  )
}

export default CreateStocks
