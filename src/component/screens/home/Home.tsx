import { FC } from "react"
import Layout from "../../layout/Layout"
import style from "./Home.module.scss" 
import Stocks from "./stocks/Stocks"

const Home: FC = () => {
  return (
    <Layout title="Home" description="Home">

      {/* http://localhost:4200/video/video_promo.mp4 */}

      {/* ================================================================== */}
      {/* <header className="header-main"><video src="/static/video/video_promo.mp4" autoplay="" loop=""></video> */}

      {/* ================================================================== */}



      {/* import News from '@/component/screens/news/News';
 import { INewsData } from '@/interface/news.interface';
 import { NewsService } from '@/services/news.service';
 import { GetStaticProps, NextPage } from 'next';
 
 const newsPage: NextPage<INewsData> = ({ newsAll }) => {
    return <News newsAll={newsAll} />;
 };
 
 export const getStaticProps: GetStaticProps<INewsData> = async () => {
   const newsAll = await NewsService.getAllNews();
   return {
     props: { newsAll },
     revalidate: 60,
   };
 };
 
 export default newsPage; */}



      <Stocks />

      <section className={`${style.section_number_room} ${style.section}`} >
        <div className={style.block_number_room} >
          <div>
            <div className={style.number_room_title} >НОМЕРА</div>
            <div className={style.number_room_text} >К Вашему выбору Отель предлагает 63 просторных номеров, разных категорий. Звездное украшение коллекции Отеля - номера с лучшими террасами Петербурга, откуда открывается великолепный вид на панораму исторического центра города и Невский проспект.</div>
          </div>
          <div className={style.wrap_btn} >
            <button className={style.btn} >Все номера</button>
            <button className={style.btn} >Забронировать</button>
          </div>
        </div>
      </section>


      <section className={`${style.restaurant} ${style.section}`} >
        <div className={style.left_block} ></div>
        <div className={style.right_block} >
          <div className={style.restaurant_title} >
            <div>РЕСТОРАН</div>
            <div className={style.mark_color} >ВКУС</div>
          </div>
          <div className={style.number_room_text}>Открытая летняя терраса, с панорамным видом на историческую часть города. Закаты на нашей террасе особенно впечатляют. Обширная винная карта и обновленное меню, а также прекрасная пицца в неаполитанском стиле удовлетворят вкус любого гурмана.</div>
          <div className={style.wrap_block} >
            <div>
              <div>Время работы:</div>
              <div>Пн - Пт: 07:00 - 11:00</div>
              <div>Сб - Вс: 07:00 - 12:00</div>
            </div>
            <div>
              <button className={style.btn} >Забронировать</button>
            </div>
          </div>
        </div>
      </section>

{/* ==================================== */}
      <section  className={`${style.service} ${style.section}`} >

        <div className={style.title_block}>Услуги</div>
        
        <div className={style.service_wrap}>

          <div className={style.service_block_one}>
            <div className={style.block_img}> </div>
            <div className={style.block_service_info}>
              <div className={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
              <div className={style.block_info}>
                <div className={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                <div className={style.btn}>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>

          <div className={style.service_block_one}>
            <div className={style.block_img}> </div>
            <div className={style.block_service_info}>
              <div className={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
              <div className={style.block_info}>
                <div className={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                <div className={style.btn}>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>

          <div className={style.service_block_one}>
            <div className={style.block_img}> </div>
            <div className={style.block_service_info}>
              <div className={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
              <div className={style.block_info}>
                <div className={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                <div className={style.btn}>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>
          
          <div className={style.service_block_one}>
            <div className={style.block_img}> </div>
            <div className={style.block_service_info}>
              <div className={style.service_title}>КОНФЕРЕНЦ-ЗАЛЫ</div>
              <div className={style.block_info}>
                <div className={style.service_info}>Идеальное место для проведения деловых переговоров и встреч. Площадь залов от 25м² до 165м²</div>
                <div className={style.btn}>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>


         
        </div>

      </section>
    </Layout>


  )
}

export default Home
