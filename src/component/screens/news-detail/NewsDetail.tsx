import Layout from '@/component/layout/Layout'
import NewsItem from '@/component/ui/news/NewsItem'
import { INewsDataSingle } from '@/interface/news.interface'
import { FC } from 'react'

const NewsDetail: FC<INewsDataSingle> = ({ news }) => {
  return (
    <Layout title="news" description='news'>
        <NewsItem news={news} />
    </Layout>
  )
}

export default NewsDetail