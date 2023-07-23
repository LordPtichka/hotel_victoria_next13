import Layout from "@/component/layout/Layout"
import axios from "axios"
import { IStockData } from "@/interface/stock.interface"
import { FC, MouseEvent, useState } from "react"
import Stock from "../home/stocks/Stock"

const CreateStocks: FC<IStockData> = ({ stocksAll }) => {
  // Состояния для хранения данных формы
  const [stock, setStocks] = useState(stocksAll) // Состояние для хранения всех новостей
  const [title, setTitle] = useState("") // Состояние для хранения заголовка новости
  const [description, setDescription] = useState("") // Состояние для хранения описания новости
  const [img, setImg] = useState("") // Состояние для хранения пути к изображению новости

  // Обработчик события при нажатии на кнопку "создать статью"
  const createStocks = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // Создание нового объекта новости с данными из формы
    const newStock = {
      id: stock.length + 1,
      title,
      description,
      img,
    }
    // Добавление новой новости в начало массива новостей с помощью функции setStocks

    // Отправка POST-запроса на сервер
    axios

      .post("http://localhost:4200/stocks", newStock)
      // .post("http://localhost:4200/Stocks/CreateStocks", newStock)
      .then((response) => {
        console.log(response.data) // Вывод ответа сервера в консоль
        setStocks((prev) => {
          console.log(prev) // Вывод prev в консоль
          return [newStock, ...prev]
        })

        setTitle("")
        setDescription("")
        setImg("")
      })
      .catch((error) => {
        console.error(error) // Вывод ошибки в консоль
      })
  }

  return (
    <Layout title={"create"}>
      <form>
        {/* Поле ввода для заголовка новости */}
        <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} value={title} />
        {/* Поле ввода для описания новости */}
        <input type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} value={description} />
        {/* Поле ввода для пути к изображению новости */}
        <input type="text" placeholder="img" onChange={(e) => setImg(e.target.value)} value={img} />
        {/* Кнопка для создания новой статьи */}
        <button onClick={createStocks}>создать статью</button>
      </form>
      <div>==============================</div>
      {/* Отображение списка новостей */}
      {stock.length ? stock.map((stock) => <Stock key={stock.id} stock={stock} />) : <div>Stocks Not Found</div>}
    </Layout>
  )
}

export default CreateStocks
