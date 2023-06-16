import { prisma } from '@/server/db';
import { InteractionType } from '@/types';

export const getAllInteractionsTags = async () => {
  const interactions = await prisma.interactionTag.findMany({});
  return interactions;
};

export const addInteraction = async (newInteraction: InteractionType) => {
  const { userId, boardGameId, interactionTagId } = newInteraction;
  return await prisma.userBoardGameInteraction.create({
    data: { userId: userId, boardGameId: boardGameId, interactionTagId: interactionTagId },
  });
};

export const deleteInteraction = async (newDeleteInteraction: InteractionType) => {
  console.log('prisma delete', newDeleteInteraction);
  const { userId, boardGameId, interactionTagId } = newDeleteInteraction;

  // await prisma.userBoardGameInteraction.findMany({
  //   where: { userId: userId, boardGameId: boardGameId, interactionTagId: interactionTagId },
  // });

  const interaction = await prisma.userBoardGameInteraction.findFirst({
    where: {
      userId: userId,
      boardGameId: boardGameId,
      interactionTagId: interactionTagId,
    },
  });
  const deleted = await prisma.userBoardGameInteraction.delete({
    where: {
      id: interaction?.id,
    },
  });
  return deleted;

  // try {
  //   await prisma.userBoardGameInteraction.deleteMany({
  //     where: {
  //       userId: userId,
  //       boardGameId: boardGameId,
  //       interactionTagId: interactionTagId,
  //     },
  //   });
  //   return { message: 'Object deleted successfully' };
  // } catch (error) {
  //   return { error: "couldn't delete the interaction" };
  // }
};
