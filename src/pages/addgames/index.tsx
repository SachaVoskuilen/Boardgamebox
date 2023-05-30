import { useGetBoardgameData } from '@/hooks';
import { BoardGameType } from '@/types';
import { FC } from 'react';

const AddGames: FC = () => {
  // useGetBGGData;
  const { data, isLoading, isError } = useGetBoardgameData(
    'https://api.boardgameatlas.com/api/search?order=rank&limit=3&pretty=true&client_id=VMtg9BF047',
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  if (data) {
    console.log(data);
  }

  return (
    <div>
      {data && console.log(data)}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
  // return <div>game</div>;
};

export default AddGames;
