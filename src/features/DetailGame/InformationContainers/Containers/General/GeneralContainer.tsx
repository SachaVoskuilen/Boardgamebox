import { Selector } from '@/components';
import { Box, Flex, H2Title } from '@/styles';
import { useEffect, useState } from 'react';
import { BasicBlock } from './Basic';
import { BoardGameType } from '@/types';
import { TagFlex } from '@/components';
import { BasicInfoType } from './basicInfo.type';
import { useWindowState } from '@/hooks';

export const GeneralContainer = ({ game }: { game: BoardGameType }) => {
  const { min_age, min_players, max_players, min_playtime, max_playtime, average_learning_complexity } = game;
  const { windowSize } = useWindowState();

  const [selectedDisplay, setDisplayChange] = useState('box');
  const options = [
    { value: 'box', label: 'Box' },
    { value: 'boardGameBox', label: 'BoardGameBox' },
  ];

  const boxData: BasicInfoType = {
    age: min_age,
    players: {
      minPlayers: min_players,
      maxPlayers: max_players,
    },
    duration: {
      minDuration: min_playtime,
      maxDuration: max_playtime,
    },
    weight: average_learning_complexity,
  };

  const handleChange = (updated: string) => {
    setDisplayChange(updated);
  };

  return (
    <Box>
      {windowSize.width < 750 ? (
        <Flex flexDirection={'column'}>
          <Box width={'100%'}>
            <Box maxWidth={'250px'}>
              <Selector options={options} defaultValue={options[0]} handleChange={handleChange} />
            </Box>
            {selectedDisplay == 'box' && <BasicBlock basicInfo={boxData} />}
            {selectedDisplay == 'boardGameBox' && <BasicBlock basicInfo={boxData} />}
          </Box>
          <Box margin={'15px 0 0'}>
            <H2Title $bold>Category</H2Title>
            {game?.categories && <TagFlex tags={game?.categories.map((category) => category.id)} />}
          </Box>
          <Box margin={'15px 0'}>
            <H2Title $bold>Mechanics</H2Title>
            {game?.mechanics && <TagFlex tags={game?.mechanics.map((mechanic) => mechanic.id)} />}
          </Box>
        </Flex>
      ) : (
        <Flex flexDirection={'row'} flexWrap={'wrap'} margin={'25px 0'}>
          <Box width={'40%'}>
            <Box maxWidth={'250px'}>
              <Selector options={options} defaultValue={options[0]} handleChange={handleChange} />
            </Box>
            {selectedDisplay == 'box' && <BasicBlock basicInfo={boxData} />}
            {selectedDisplay == 'boardGameBox' && <BasicBlock basicInfo={boxData} />}
          </Box>
          <Box width={'60%'}>
            <Box margin={'0 0 0 25px'}>
              <H2Title $bold>Category</H2Title>
              {game?.categories && <TagFlex tags={game?.categories.map((category) => category.id as string)} />}
            </Box>
            <Box margin={'15px 0 0 25px'}>
              <H2Title $bold>Mechanics</H2Title>
              {game?.mechanics && <TagFlex tags={game?.mechanics.map((mechanic) => mechanic.id as string)} />}
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
};
