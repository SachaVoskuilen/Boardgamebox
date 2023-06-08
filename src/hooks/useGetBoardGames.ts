import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchApi } from 'utils';

async function fetchBoardGameData(url: string) {
  return await fetchApi(url);
}

export function useGetBoardGames(url: string, name: string) {
  return useQuery([`BoardGames`, name], () => fetchBoardGameData(url), { retry: false });
}

export async function prefetchBoardGames(queryClient: QueryClient, url: string, name?: string) {
  await queryClient.prefetchQuery([`BoardGames`, name], () => fetchBoardGameData(url));
}
