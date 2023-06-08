import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchApi } from 'utils';

async function fetchMechanics() {
  return await fetchApi(
    `${process.env.NEXT_PUBLIC_BASE_BGA}/game/mechanics?pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
  );
}

export function useGetMechanics() {
  return useQuery([`Mechanics`], () => fetchMechanics(), { retry: false });
}

export async function prefetchMechanics(queryClient: QueryClient) {
  await queryClient.prefetchQuery([`Mechanics`], () => fetchMechanics());
}
