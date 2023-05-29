import { Box, Flex } from '@/styles';
import { NavigationType } from '.';

export const Navigation = ({ menu, setMenu }: NavigationType) => {
  return (
    <Flex>
      {menu != 'hamburger' && <Box>Logo</Box>}
      <button onClick={() => (menu == 'default' ? setMenu('hamburger') : setMenu('default'))}>Change</button>
    </Flex>
  );
};
