import { Layout } from '@/components';
import { DetailGame } from '@/features';
import { prefetchCategories, prefetchDetailGame, prefetchMechanics, useGetDetailGame } from '@/hooks';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

type DetailGameProps = {
  id: string;
};

const SingleGame: FC<DetailGameProps> = ({ id }) => {
  const { data: game, isLoading } = useGetDetailGame(id);
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(function () {
      if (typeof game == 'undefined') {
        push('/404');
      }
    }, 3000);
  }, []);

  return (
    <Layout title={game?.name ? game.name : 'Detail game'} loading={isLoading}>
      {game! && <DetailGame game={game} />}
    </Layout>
  );
};

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  if (typeof params?.id === 'string') {
    const queryClient = new QueryClient();
    await prefetchDetailGame(queryClient, params.id);
    await prefetchCategories(queryClient);
    await prefetchMechanics(queryClient);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        id: params.id,
      },
    };
  } else {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
}

export default SingleGame;
