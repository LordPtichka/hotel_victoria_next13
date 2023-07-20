import Layout from '@/component/layout/Layout';
 import NewsItem from '@/component/ui/news/NewsItem';
 import { INewsData } from '@/interface/news.interface';
import axios from 'axios';
 import { FC, MouseEvent, useState } from 'react';
 
 const CreateNews: FC<INewsData> = ({ newsAll }) => {
   // Состояния для хранения данных формы
   const [news, setNews] = useState(newsAll); // Состояние для хранения всех новостей
   const [title, setTitle] = useState(''); // Состояние для хранения заголовка новости
   const [description, setDescription] = useState(''); // Состояние для хранения описания новости
   const [image, setImage] = useState(''); // Состояние для хранения пути к изображению новости
 
   // Обработчик события при нажатии на кнопку "создать статью"
   const createNews = (e: MouseEvent<HTMLButtonElement>) => {
     e.preventDefault();
     // Создание нового объекта новости с данными из формы
     const newNews = {
       id: news.length + 1,
       title,
       description,
       image,
     };
     // Добавление новой новости в начало массива новостей с помощью функции setNews
    //  setNews((prev) => [newNews, ...prev]); // локально добавлял элемент в массив, сейчас это не нужно

     // Отправка POST-запроса на сервер
   axios.post('http://localhost:4200/news', newNews)
     .then(response => {
       console.log(response.data); // Вывод ответа сервера в консоль
       setNews((prev) => [newNews, ...prev]);
       
       setTitle('');
       setDescription('');
       setImage('');
     })
     .catch(error => {
       console.error(error); // Вывод ошибки в консоль
     });
 


     // Сброс значений полей формы после создания новости
    //  setTitle('');
    //  setDescription('');
    //  setImage('');
   };
 
   return (
     <Layout title={'create'}>
       <form>
         {/* Поле ввода для заголовка новости */}
         <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} value={title}
         />
         {/* Поле ввода для описания новости */}
         <input type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} value={description}
         />
         {/* Поле ввода для пути к изображению новости */}
         <input type="text" placeholder="image" onChange={(e) => setImage(e.target.value)} value={image}
         />
         {/* Кнопка для создания новой статьи */}
         <button onClick={createNews}>создать статью</button>
       </form>
       <div>==============================</div>
       {/* Отображение списка новостей */}
       {news.length ? (
         news.map((news) => <NewsItem key={news.id} news={news} />)
       ) : (
         <div>News Not Found</div>
       )}
     </Layout>
   );
 };
 
 export default CreateNews; 