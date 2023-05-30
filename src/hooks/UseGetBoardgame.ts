import { useState, useEffect } from 'react';
import { parseString } from 'xml2js';
import { useQuery } from '@tanstack/react-query';
import { fetchApi } from 'utils';

async function fetchBGG(url: string) {
  return await fetchApi(url);
}

export function useGetBoardgameData(url: string) {
  return useQuery(['bggData', url], () => fetchBGG(url), { retry: false });
}
