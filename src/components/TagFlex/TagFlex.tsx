import { StyledTagFlex } from '.';
import { Tag } from '..';

export const TagFlex = ({ tags }: { tags: Array<string> }) => {
  return (
    <StyledTagFlex>
      {tags.map((tag) => (
        <Tag text={tag} key={tag} />
      ))}
    </StyledTagFlex>
  );
};
