import Layout from "@/component/layout/Layout"
import axios from "axios"
import { IRoomData } from "@/interface/room.interface"
import { FC, MouseEvent, useState } from "react"
// import Room from "../home/rooms/Room"
import style from "./CreateRoom.module.scss"
import Rooms from "../../rooms_block/RoomCard"
import { useRouter } from "next/router"

const CreateRooms: FC<IRoomData> = ({ roomsAll }) => {
  // Состояния для хранения данных формы
  const [room, setRooms] = useState(roomsAll) // Состояние для хранения всех новостей
  const [price, setPrice] = useState(roomsAll)
  const [category, setCategory] = useState(roomsAll)
  const [title, setTitle] = useState("") // Состояние для хранения заголовка новости
  const [description, setDescription] = useState("") // Состояние для хранения описания новости
  const [files, setFiles] = useState([]) // Состояние для хранения описания новости
  // const [image, setImage] = useState<File | null>() // Состояние для хранения выбранного изображения
  const [imageName, setImageName] = useState([])
  const [previewImage, setPreviewImage] = useState(null)

  // const arr = ["lol", "xxx", "loh"]
  // console.log(arr.join(" &&/&& "))

  // ==========================
  // ==========================
  const handleImageChange = (e) => {


    const file = e.target.files[0]
    if (file) {
      setFiles([...files, file])
      setImageName([...imageName, file.name])
    }

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

  // ==================================================================
  // ==================================================================
  // Обработчик события при нажатии на кнопку "создать статью"
  const createRooms = async (e: MouseEvent<HTMLButtonElement>) => {


    // console.log(files)
    // console.log(imageName)
    // console.log(imageName)

    e.preventDefault() // убирает перезагрузку страницы после нажатия кнопки

    try {
      // Создание нового объекта FormData
      const formData = new FormData()

      formData.append("title", title)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("description", description)
      // formData.append("image", image as File)
      files.forEach((file) => {
        formData.append(`image`, file)
      })
      formData.append("imageName", imageName.join(" &&%&& "))

      const formDataObject = {}
      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value
      }
      console.log(formDataObject)
      // formData.append("image", `${formDataObject.image.name}`)

      // Отправка данных на сервер с помощью axios
      const resultUpload = await axios.post(`http://${process.env.HOST}/rooms/upload`, formData) // отправка данных
      const resultCreate = await axios.post(`http://${process.env.HOST}/rooms/create`, formDataObject) // отправка данных
      console.log(resultUpload.status)
      console.log(resultCreate.status)
      // Обновление состояния новостей после успешной отправки
      // setRooms([...room, { id: room.length + 1, title, description, price, category, image: `${formDataObject.image.name}` }])

      setTitle("")
      setDescription("")
      setCategory("")
      setPrice("")
      setFiles([])
      setImageName([])
      // setImage(null)
      setPreviewImage(null)
      // }
    } catch (error) {
      console.error(error)
    }
  }

  // ====================================================================
  // ====================================================================
  const handleClick = async (id: string) => {
    console.log(id)
    const result = await axios.get(`http://${process.env.HOST}/rooms/delete/${id}`)
    console.log(result.status) // Обработка полученных данных
  }
  // ===========================================
  // ===========================================

  return (
    <Layout title={"create"}>
      <form style={{ paddingTop: "130px" }}>
        <div className={style.card_room}>
          <div className={` ${style.gradient_bg}`} style={{ backgroundImage: `url(${previewImage})` }}>
            <input type="file" placeholder="title" accept="image/*"
              onChange={(e) => {
                // setImage(e.target.files?.[0])
                handleImageChange(e)
              }}
            />
            <div className={style.info_block}>
              <textarea className={style.card_title} placeholder="ЗАГОЛОВОК" type="text"  onChange={(e) => setCategory(e.target.value)} />
              <textarea className={style.card_price} placeholder="Описание" type="text"  onChange={(e) => setPrice(e.target.value)} />
            </div>
          </div>

        </div>

        <h1>ЗАГРУЖЕННЫЕ файлы ДЛЯ КАРУСЕЛИ</h1>

        
        <button onClick={createRooms} className={style.btnCreate}>создать статью</button>


      </form>
      <div>==============================</div>

      {/* Отображение списка номеров */}
      <div className={style.card_wrap}>
        {room.length ? (
          room.map((room) => (
            <div className={style.card_room}>
              <div className={style.gradient_bg} style={{ backgroundImage: `url(http://${process.env.HOST}/room/${room.image})` }}>
              <button onClick={() => handleClick(room.id)} className={style.btn_delete}></button>
                <div className={style.info_block}>
                  <div className={style.card_title} dangerouslySetInnerHTML={{ __html: room.category }}></div>
                  <div className={style.card_price} dangerouslySetInnerHTML={{ __html: room.price }}></div>
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
