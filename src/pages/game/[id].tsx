import { Layout } from '@/components';
import { DetailGame } from '@/features';
import { useGetBoardGameData } from '@/hooks';
import { BoardGameType } from '@/types';
import { GetServerSidePropsContext } from 'next';
import { FC, useEffect, useState } from 'react';

type DetailGameProps = {
  id: string;
};

const SingleGame: FC<DetailGameProps> = ({ id }) => {
  const [title, setTitle] = useState<string>('DetailGame');
  const [game, setGame] = useState<BoardGameType>();

  const gameData = useGetBoardGameData(
    `${process.env.NEXT_PUBLIC_BASE_BGA}ids=${id}&order=rank&pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
    'rank',
  );

  useEffect(() => {
    if (gameData.data) {
      setTitle(gameData.data.games[0].name);
      setGame(gameData.data.games[0]);
    }
  }, [gameData]);

  return (
    <Layout title={title} loading={!game}>
      {game! && <DetailGame game={game} />}
    </Layout>
  );
};

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  if (!params) {
    return {
      redirect: {
        destination: '/401',
        permanent: false,
      },
    };
  }
  return {
    props: {
      id: params.id,
    },
  };
}

export default SingleGame;
