import { CategoryType } from '@/types';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchApi } from 'utils';

async function fetchCategories() {
  const fetchedCategories = await fetchApi(
    `${process.env.NEXT_PUBLIC_BASE_BGA}/game/categories?pretty=true&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
  ).then((data) => {
    return data.categories;
  });

  return fetchedCategories;
}

export function useGetCategories() {
  return useQuery<Array<CategoryType>>([`Categories`], () => fetchCategories(), { retry: false });
}

export async function prefetchCategories(queryClient: QueryClient) {
  await queryClient.prefetchQuery<Array<CategoryType>>([`Categories`], () => fetchCategories());
}
