import Layout from '@/component/layout/Layout'
import NewsItem from '@/component/ui/news/NewsItem'
import { INewsData } from '@/interface/news.interface'
import { FC, useState } from 'react'

const News: FC<INewsData> = ({ newsAll }) => {

  // const [newsAll, setNewsAll] = useState(newsAllData)

  return (
    <Layout title="Home" description="Home">
        {newsAll.length ? newsAll.map((news) => <NewsItem key={news.id} news={news} />) : 
        <div>News Not Found</div>}
    </Layout>
  )
}

export default News