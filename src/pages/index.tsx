import { Layout } from '@/components';
import { useGetBoardgameData } from '@/hooks';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  const { data, isLoading, isError } = useGetBoardgameData(
    'https://api.boardgameatlas.com/api/search?order=rank&limit=3&pretty=true&client_id=VMtg9BF047',
    'general',
  );

  return (
    <Layout loading={false} title="Home">
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error retrieving boardgames</div>}
      {data && console.log(data)}
      <div>iets</div>
    </Layout>
  );
};

export default Home;
