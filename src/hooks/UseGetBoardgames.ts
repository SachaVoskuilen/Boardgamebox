import { useQuery } from '@tanstack/react-query';
import { fetchApi } from 'utils';

async function fetchBGA(url: string) {
  return await fetchApi(url);
}

export function useGetBoardGameData(url: string, name?: string) {
  return useQuery([`${name} bgaData`, name], () => fetchBGA(url), { retry: false });
}
