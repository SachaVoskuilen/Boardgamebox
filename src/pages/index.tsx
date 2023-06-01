import { GamesFlex, Layout } from '@/components';
import { useGetBoardGameData } from '@/hooks';
import { H1Title } from '@/styles';
import { BoardGameType } from '@/types';
import { type NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [ranked, setRanked] = useState<Array<BoardGameType>>();
  const [popular, setPopular] = useState<Array<BoardGameType>>();

  const rankedData = useGetBoardGameData(
    `${process.env.NEXT_PUBLIC_BASE_BGA}limit=10&order=rank&pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
    'rank',
  );
  const popularData = useGetBoardGameData(
    `${process.env.NEXT_PUBLIC_BASE_BGA}limit=3&order=popular&pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
    'popular',
  );

  useEffect(() => {
    if (rankedData.data) {
      setRanked(rankedData.data.games);
    }
    if (popularData.data) {
      setPopular(popularData.data.games);
    }
  }, [rankedData, popularData]);

  return (
    <Layout loading={rankedData.isLoading && popularData.isLoading} title="Home">
      <H1Title>Quick menu</H1Title>
      <H1Title>Ranked</H1Title>
      {ranked! && <GamesFlex games={ranked} type={'ranked'} />}
      <H1Title>Popular</H1Title>
      {popular! && <GamesFlex games={popular} type={'popular'} />}
    </Layout>
  );
};

export default Home;
