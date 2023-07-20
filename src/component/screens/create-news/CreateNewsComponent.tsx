import Layout from '@/component/layout/Layout'
import NewsItem from '@/component/ui/news/NewsItem'
import { INewsData } from '@/interface/news.interface'
import { FC, MouseEvent, useState } from 'react'

const CreateNews: FC<INewsData> = ({ newsAll }) => {


  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  // const createNews = e => { // было так
  const createNews = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => { // исправление от vs code
    e.preventDefault()

    console.log({ title, description, image })

    setNews(prev => [{id: prev.length + 1, title, description, image, }, ...prev])
  }

  return (
    <Layout title={"create"}>
      
      <div>==============================</div>
      
      {newsAll.length ? newsAll.map((news) => <NewsItem key={news.id} news={news} />) : <div>News Not Found</div>}
    </Layout>
  )
}

export default CreateNews