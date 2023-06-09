import { UserType, InteractionTagType } from '.';

export interface InteractionType {
  id?: number;
  user?: UserType;
  userId: string;
  boardGameId: string;
  interactionTag?: InteractionTagType;
  interactionTagId: number;
  createdAt?: Date;
  updatedAt?: Date;
}
