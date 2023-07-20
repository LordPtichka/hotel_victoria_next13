import Layout from '@/component/layout/Layout'
import NewsItem from '@/component/ui/news/NewsItem'
import { INewsData } from '@/interface/news.interface'
import { FC, MouseEvent, useState } from 'react'

const CreateNews: FC<INewsData> = ({ newsAll }) => {

  

  return (
    <Layout title={"create"}>
      
      <div>==============================</div>
      
      {newsAll.length ? newsAll.map((news) => <NewsItem key={news.id} news={news} />) : <div>News Not Found</div>}
    </Layout>
  )
}

export default CreateNews