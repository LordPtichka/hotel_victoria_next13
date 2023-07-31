import Layout from "@/component/layout/Layout"
import axios from "axios"
import { IStockData } from "@/interface/stock.interface"
import { FC, MouseEvent, useState } from "react"
import Stock from "../home/stocks/Stock"
import style from "./CreateStocks.module.scss"

const CreateStocks: FC<IStockData> = ({ stocksAll }) => {
  // Состояния для хранения данных формы
  const [stock, setStocks] = useState(stocksAll) // Состояние для хранения всех новостей
  const [title, setTitle] = useState("") // Состояние для хранения заголовка новости
  const [description, setDescription] = useState("") // Состояние для хранения описания новости
  const [shortDescription, setShortDescription] = useState("") // Состояние для хранения описания новости
  const [image, setImage] = useState<File | null>(null) // Состояние для хранения выбранного изображения

  const [previewImage, setPreviewImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Проверяем, существует ли переменная file
      const reader = new FileReader() // Создаем новый экземпляр объекта FileReader

      reader.onloadend = () => {
        // Устанавливаем обработчик события onloadend
        setPreviewImage(reader.result) // Устанавливаем результат чтения файла в переменную previewImage
      }
      reader.readAsDataURL(file) // Читаем содержимое файла и преобразуем его в Data URL
    }
  }

  // Обработчик события при нажатии на кнопку "создать статью"
  const createStocks = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    try {
      // Создание нового объекта FormData
      const formData = new FormData()
      formData.append("title", title)
      formData.append("description", description)
      formData.append("short_description", shortDescription)
      formData.append("image", image as File)

      console.log(title, description, shortDescription)

      const formDataObject = {}
      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value
      }
      formData.append("image", `http://localhost:4200/${formDataObject.image.name}`)

      // Отправка данных на сервер с помощью axios
      console.log(formData)
      await axios.post("http://localhost:4200/Stocks/CreateStocks", formData) // отправка данных

      // Обновление состояния новостей после успешной отправки
      setStocks([...stock, { id: stock.length + 1, title, description, shortDescription, image: `http://localhost:4200/${formDataObject.image.name}` }])

      setTitle("")
      setDescription("")
      setShortDescription("")
      setImage(null)
      setPreviewImage(null)
      // }
    } catch (error) {
      console.error(error)
    }
  }

  // ===========================================
  // ===========================================

  return (
    <Layout title={"create"}>
      <div>==============================</div>

      <form>
        <div>
          <div className={style.offer}>
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
                <input className={`${style.input} ${style.title_offer}`} placeholder="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className={style.font_for_text}>
                <textarea className={style.input} placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className={style.font_for_text}>
                <textarea className={style.input} placeholder="shortDescription" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <button onClick={createStocks}>создать статью</button>
      </form>
      <div>==============================</div>

      {/* Отображение списка скидок */}
      {stock.length ? stock.map((stock) => <Stock key={stock.id} stock={stock} />) : <div>Stocks Not Found</div>}
    </Layout>
  )
}

export default CreateStocks
