import { GamesFlex, Layout } from '@/components';
import { useGetBoardgameData } from '@/hooks';
import { H1Title } from '@/styles';
import { BoardGameType } from '@/types';
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

  if (rank.data && popular.data) {
    console.log('rank: ', rank.data);
    console.log('popular: ', popular.data);
  }

  return (
    <Layout loading={rank.isLoading && popular.isLoading} title="Home">
      <H1Title>Quick menu</H1Title>
      <H1Title>Ranked</H1Title>
      {rank.data && <GamesFlex games={rank.data.games as Array<BoardGameType>} type={'ranked'} />}
      <H1Title>Popular</H1Title>
      {popular.data && <GamesFlex games={popular.data.games as Array<BoardGameType>} type={'popular'} />}
    </Layout>
  );
};

export default Home;
