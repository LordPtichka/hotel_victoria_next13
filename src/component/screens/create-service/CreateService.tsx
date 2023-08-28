import Layout from "@/component/layout/Layout"
import axios from "axios"
import { IServiceData } from "@/interface/service.interface"
import { FC, MouseEvent, useState } from "react"
// import Service from "../home/services/Service"
import style from "./CreateService.module.scss"
import Services from "../home/services/Service"
import { useRouter } from "next/router"

const CreateServices: FC<IServiceData> = ({ servicesAll }) => {
  const handleClickDelite = async (id: string) => {
    console.log(id)
    const result = await axios.get(`http://${process.env.HOST}/Stocks/DeleteStocks/${id}`)
    console.log(result.status) // Обработка полученных данных
  }

  // Состояния для хранения данных формы
  const [service, setServices] = useState(servicesAll) // Состояние для хранения всех новостей
  const [price, setPrice] = useState(servicesAll)
  const [category, setCategory] = useState(servicesAll)
  const [title, setTitle] = useState("") // Состояние для хранения заголовка новости
  const [description, setDescription] = useState("") // Состояние для хранения описания новости
  const [shortDescription, setShortDescription] = useState("") // Состояние для хранения описания новости
  const [image, setImage] = useState<File | null>(null) // Состояние для хранения выбранного изображения

  const [previewImage, setPreviewImage] = useState(null)

  // ==========================
  // ==========================
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
  const createServices = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    try {
      // Создание нового объекта FormData
      const formData = new FormData()
      formData.append("title", title)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("description", description)
      console.log(formData.description)
      // formData.append("short_description", shortDescription)
      formData.append("short_description", "-")
      formData.append("image", image as File)

      const formDataObject = {}
      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value
      }
      formData.append("image", `${formDataObject.image.name}`)
      console.log(formDataObject)
      // Отправка данных на сервер с помощью axios
      await axios.post(`http://${process.env.HOST}/services/create`, formData) // отправка данных

      // Обновление состояния новостей после успешной отправки
      setServices([...service, { id: service.length + 1, title, description, price, category, shortDescription, image: `${formDataObject.image.name}` }])

      setTitle("")
      setDescription("")
      setShortDescription("")
      setCategory("")
      setPrice("")
      setImage(null)
      setPreviewImage(null)
      // }
    } catch (error) {
      console.error(error)
    }
  }
  const { pathname } = useRouter() // получаю имя ссылки из useRouter()
  const handleClick = async (id: string) => {
    console.log(id)
    const result = await axios.get(`http://${process.env.HOST}/services/delete/${id}`)
    console.log(result.status) // Обработка полученных данных
  }
  // ===========================================
  // ===========================================

  return (
    <Layout title={"create"}>
      <form className={style.form} style={{ paddingTop: "130px" }}>
        <div className={style.card_service}>
          <input
            type="file"
            placeholder="title"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files?.[0])
              handleImageChange(e)
            }}
          />
          <div className={style.gradient_bg} style={{ backgroundImage: `url(${previewImage})` }}>
            <div className={style.info_block}>
              <textarea className={style.card_title} placeholder="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              <textarea className={style.card} placeholder="" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
          </div>
        </div>

        <button onClick={createServices}>создать статью</button>
      </form>
      <div>==============================</div>

      {/* Отображение списка номеров */}
      <div className={style.card_wrap}>
        {service.length ? (
          service.map((service) => (
            <div className={style.service_block}>
              <div className={`${style.block_img} ${style.transfer}`} style={{ backgroundImage: `url(http://${process.env.HOST}/service/${service.image})` }}>
                {pathname === "/create/stock" ? (
                  <>
                    <button onClick={() => handleClickDelite(stock.id)} className={style.btn_delete}></button>
                    <button onClick={() => handleData(stock)} className={style.btn_change}>
                      Изменить
                    </button>
                    {/* <CreateStocks dataCard={dataCard} /> */}
                  </>
                ) : (
                  ""
                )}
              </div>

              <div className={style.block_service_info}>
                <textarea className={style.service_title} value={service.title}></textarea>

                <div className={style.block_info}>
                  <textarea className={style.service_info} value={service.description}></textarea>
                  <div className={style.btn}>Подробнее</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Services Not Found</div>
        )}
      </div>
    </Layout>
  )
}

export default CreateServices
