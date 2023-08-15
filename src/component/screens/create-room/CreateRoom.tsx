import Layout from "@/component/layout/Layout"
import axios from "axios"
import { IRoomData } from "@/interface/room.interface"
import { FC, MouseEvent, useState } from "react"
// import Room from "../home/rooms/Room"
import style from "./CreateRoom.module.scss"
import Rooms from "../home/rooms/Room"
import { useRouter } from "next/router"

const CreateRooms: FC<IRoomData> = ({ roomsAll }) => {
  // Состояния для хранения данных формы
  const [room, setRooms] = useState(roomsAll) // Состояние для хранения всех новостей
  const [price, setPrice] = useState(roomsAll)
  const [category, setCategory] = useState(roomsAll)
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
  const createRooms = async (e: MouseEvent<HTMLButtonElement>) => {
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

      // Отправка данных на сервер с помощью axios
      await axios.post(`http://${process.env.HOST}/rooms/create`, formData) // отправка данных

      // Обновление состояния новостей после успешной отправки
      setRooms([...room, { id: room.length + 1, title, description, price, category, shortDescription, image: `${formDataObject.image.name}` }])

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
    const result = await axios.get(`http://${process.env.HOST}/rooms/delete/${id}`)
    console.log(result.status) // Обработка полученных данных
  }
  // ===========================================
  // ===========================================

  return (
    <Layout title={"create"}>
      <div>==============================</div>

      <form className={style.form}>
        <div className={style.card_room}>
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
              <textarea className={style.card_title} placeholder="title" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
              <textarea className={style.card_price} placeholder="title" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
          </div>
        </div>

        <button onClick={createRooms}>создать статью</button>
      </form>
      <div>==============================</div>

      {/* Отображение списка скидок */}
      <div className={style.card_wrap}>
        {room.length ? (
          room.map((room) => (
            <div className={style.card_room}>
              {pathname === "/create/room" ? <button onClick={() => handleClick(room.id)} className={style.btn_delete}></button> : ""}
              <div className={style.gradient_bg} style={{ backgroundImage: `url(http://${process.env.HOST}/${room.image})` }}>
                <div className={style.info_block}>
                  <div className={style.card_title}>{room.category}</div>
                  <div className={style.card_price}>{room.price}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Rooms Not Found</div>
        )}
      </div>
    </Layout>
  )
}

export default CreateRooms
