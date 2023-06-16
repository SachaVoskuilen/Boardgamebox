import { GamesGrid, Layout } from '@/components';
import { useGetBoardGames } from '@/hooks';
import { H1Title } from '@/styles';
import { BoardGameType } from '@/types';
import { type NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [ranked, setRanked] = useState<Array<BoardGameType>>();
  const [popular, setPopular] = useState<Array<BoardGameType>>();

  const rankedData = useGetBoardGames(
    `${process.env.NEXT_PUBLIC_BASE_BGA}/search?limit=10&order=rank&pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
    'rank',
  );
  const popularData = useGetBoardGames(
    `${process.env.NEXT_PUBLIC_BASE_BGA}/search?limit=10&skip=10&order=popular&pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
    'popular',
  );

  useEffect(() => {
    if (rankedData.data) {
      setRanked(rankedData.data);
    }
    if (popularData.data) {
      setPopular(popularData.data);
    }
  }, [rankedData, popularData]);

  return (
    <Layout loading={rankedData.isLoading && popularData.isLoading} title="Home">
      <H1Title $bold $line>
        Ranked
      </H1Title>
      {ranked! && <GamesGrid games={ranked} type={'ranked'} />}
      <H1Title $bold $line>
        Popular
      </H1Title>
      {popular! && <GamesGrid games={popular} type={'popular'} />}
    </Layout>
  );
};

export default Home;
