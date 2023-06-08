import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchApi } from 'utils';

async function fetchCategories() {
  return await fetchApi(
    `${process.env.NEXT_PUBLIC_BASE_BGA}/game/categories?pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
  );
}

export function useGetCategories() {
  return useQuery([`Categories`], () => fetchCategories(), { retry: false });
}

export async function prefetchCategories(queryClient: QueryClient) {
  await queryClient.prefetchQuery([`Categories`], () => fetchCategories());
}
