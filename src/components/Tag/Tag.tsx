import { FC } from 'react';
import { StyledTag } from '.';
import { StyledText } from '@/styles';

type TagType = {
  text: string;
  variant?: string;
};

export const Tag: FC<TagType> = ({ text, variant }) => {
  return (
    <StyledTag variant={variant ? variant : 'default'}>
      <StyledText>{text}</StyledText>
    </StyledTag>
  );
};
