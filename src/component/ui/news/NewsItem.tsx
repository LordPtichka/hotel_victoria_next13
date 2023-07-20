import { INewsDataSingle } from '@/interface/news.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const NewsItem: FC<INewsDataSingle> = ({ news }) => {
  return (
    <div>
        <Image src={news.image} alt={news.title} width={700} height={559}/>
        <div>{news.title}</div>
        <div>{news.description}</div>
        <Link href={`/news/${news.id}`}>читать полностью</Link>
    </div>
  )
}

export default NewsItem