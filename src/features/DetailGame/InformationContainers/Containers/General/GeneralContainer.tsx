import { Selector } from '@/components';
import { Box, Flex, H2Title } from '@/styles';
import { useState } from 'react';
import { BasicBlock } from './Basic';
import { BoardGameType } from '@/types';
import { TagFlex } from '@/components';

export const GeneralContainer = ({ game }: { game: BoardGameType }) => {
  const { min_age, min_players, max_players, min_playtime, max_playtime, average_learning_complexity } = game;

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
    <Flex flexDirection={'column'}>
      <Box width={'100%'}>
        <Box maxWidth={'250px'}>
          <Selector options={options} defaultValue={options[0]} handleChange={handleChange} />
        </Box>
        {selectedDisplay == 'box' && <BasicBlock basicInfo={boxData} />}
        {selectedDisplay == 'boardGameBox' && <BasicBlock basicInfo={boxData} />}
      </Box>
      <Box margin={'15px 0'}>
        <H2Title $bold>Category</H2Title>
        {game?.categories && <TagFlex tags={game?.categories.map((category) => category.id as string)} />}
      </Box>
      <Box margin={'15px 0'}>
        <H2Title $bold>mechanics</H2Title>
        {game?.mechanics && <TagFlex tags={game?.mechanics.map((mechanic) => mechanic.id as string)} />}
      </Box>
    </Flex>
  );
};
