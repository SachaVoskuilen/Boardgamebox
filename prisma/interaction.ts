import { prisma } from '@/server/db';
import { InteractionType } from '@/types';

export const getAllInteractionsTags = async () => {
  const interactions = await prisma.interactionTag.findMany({});
  return interactions;
};

export const addInteraction = async (newInteraction: InteractionType) => {
  const { userId, boardGameId, interactionTagId } = newInteraction;
  const interaction = await prisma.userBoardGameInteraction.create({
    data: { userId: userId, boardGameId: boardGameId, interactionTagId: interactionTagId },
  });

  return interaction;
};
