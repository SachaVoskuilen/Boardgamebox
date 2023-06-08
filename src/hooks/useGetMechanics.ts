import { MechanicType } from '@/types';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchApi } from 'utils';

async function fetchMechanics() {
  const fechedMechanics = await fetchApi(
    `${process.env.NEXT_PUBLIC_BASE_BGA}/game/mechanics?pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
  ).then((data) => {
    return data.mechanics;
  });

  return fechedMechanics;
}

export function useGetMechanics() {
  return useQuery<Array<MechanicType>>([`Mechanics`], () => fetchMechanics(), { retry: false });
}

export async function prefetchMechanics(queryClient: QueryClient) {
  await queryClient.prefetchQuery<Array<MechanicType>>([`Mechanics`], () => fetchMechanics());
}
