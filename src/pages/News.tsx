import News from '@/component/screens/news/News';
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

export default newsPage;