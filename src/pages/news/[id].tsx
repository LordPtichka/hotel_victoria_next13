import NewsAllDetail from '@/component/screens/news-detail/NewsAllDetail'
import { INewsDataSingle } from '@/interface/news.interface'
import { NewsService } from '@/services/news.service'
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'


const NewsDetailPage: NextPage<INewsDataSingle> = ({news}) => {
    return <NewsAllDetail news={news} /> //-----------------------------!!!!!!!!
}
// ===================================
interface Params extends ParsedUrlQuery {
    id: string
  }
// создание динамичных путей к каждой статье в соответствии с их id
export const getStaticPaths: GetStaticPaths<Params> = async () => {
    
    const newsAll = await NewsService.getAllNews()
    
    return {
        paths: newsAll.map((news) => ({
            params: {id: news.id.toString()}
        })),
        fallback: "blocking"  // blocking => если страницы нету то идёт отправка запроса на сервак и если там есть, то она выводиться и добавляется в кеш
    }
} 




// получение данных с внешнего сервера и их прокидка на клиента 
export const getStaticProps: GetStaticProps<INewsDataSingle> = async ({ params }) => {
    const news = await NewsService.getDyIDNews(String(params?.id))
  
    return {
      props: { news },
      revalidate: 60,
    }
  }
// ===================================

export default NewsDetailPage