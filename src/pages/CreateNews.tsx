import CreateNews from "@/component/screens/create-news/CreateNewsComponent"
import { INewsData } from "@/interface/news.interface"
import { NewsService } from "@/services/news.service"
import { GetStaticProps, NextPage } from "next"

const CreateNewsPage: NextPage<INewsData> = ({ newsAll }) => {
  return <CreateNews newsAll={newsAll} />
}

// ===================================
// получение данных с внешнего сервера и их прокидка на клиента
export const getStaticProps: GetStaticProps<INewsData> = async () => {
  const newsAll = await NewsService.getAllNews()

  return {
    props: { newsAll },
    revalidate: 60,
  }
}
// ===================================

export default CreateNewsPage
