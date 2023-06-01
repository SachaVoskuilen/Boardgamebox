import { Layout } from '@/components';
import { useGetBoardGameData } from '@/hooks';
import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';

type DetailGameProps = {
  id: string;
};

const DetailGame: FC<DetailGameProps> = ({ id }) => {
  const game = useGetBoardGameData(
    `${process.env.NEXT_PUBLIC_BASE_BGA}ids=${id}&order=rank&pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
    'rank',
  );

  if (game.data) {
    console.log('game: ', game.data.games[0]);
  }

  return <Layout>iets</Layout>;
};

export async function getServerSideProps({ req, res, params }: GetServerSidePropsContext) {
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

export default DetailGame;
