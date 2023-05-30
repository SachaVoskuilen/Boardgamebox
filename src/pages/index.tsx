import { Layout } from '@/components';
import { useGetBoardgameData } from '@/hooks';
import { H1Title } from '@/styles';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  const rank = useGetBoardgameData(
    `${process.env.NEXT_PUBLIC_BASE_BGA}limit=3&order=rank&pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
    'rank',
  );
  const popular = useGetBoardgameData(
    `${process.env.NEXT_PUBLIC_BASE_BGA}limit=3&order=popular&pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
    'popular',
  );

  return (
    <Layout loading={rank.isLoading && popular.isLoading} title="Home">
      <H1Title>Quick menu</H1Title>
      <H1Title>Ranked</H1Title>
      <H1Title>Popular</H1Title>
    </Layout>
  );
};

export default Home;
