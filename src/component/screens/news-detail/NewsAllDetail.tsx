import Layout from '@/component/layout/Layout'
import NewsItem from '@/component/ui/news/NewsItem'
import { INewsDataSingle } from '@/interface/news.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const NewsAllDetail: FC<INewsDataSingle> = ({ news }) => {
  return (
    <Layout title="news" description='news'>
      <div>
        <div>тут полная статья</div>
        <Image src={news.image} alt={news.title} width={700} height={559}/>
        <div>{news.title}</div>
        <div>{news.description}</div>
        <Link href={`/news/${news.id}`}>читать полностью</Link>
      </div>
    </Layout>
  )
}

export default NewsAllDetail