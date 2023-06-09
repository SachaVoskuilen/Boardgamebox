import { InteractionType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchApi } from 'utils';

async function addInteraction(interaction: InteractionType) {
  console.log({ addInteraction: interaction, url: `${window.origin}/api/interaction` });

  return fetchApi(`${window.origin}/api/interaction`, {
    method: 'POST',
    body: JSON.stringify(interaction),
  });
}

export function usePostInteraction() {
  const queryClient = useQueryClient();
  return useMutation((data: InteractionType) => addInteraction(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['interactions']);
    },
    onError(error, variables, context) {
      console.log({ error: error, variables: variables, context: context });
    },
  });
}
