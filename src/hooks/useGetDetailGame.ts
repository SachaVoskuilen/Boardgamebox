import { BoardGameType } from '@/types';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchApi } from 'utils';

async function fetchDetailGame(id: string) {
  const fetchedGame = await fetchApi(
    `${process.env.NEXT_PUBLIC_BASE_BGA}/search?ids=${id}&order=rank&pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
  ).then((data) => {
    return data.games[0];
  });

  return fetchedGame;
}

export function useGetDetailGame(id: string) {
  return useQuery<BoardGameType>([`BoardGame`, id], () => fetchDetailGame(id), { retry: false });
}

export async function prefetchDetailGame(queryClient: QueryClient, id: string) {
  await queryClient.prefetchQuery<BoardGameType>([`BoardGame`, id], () => fetchDetailGame(id));
}
