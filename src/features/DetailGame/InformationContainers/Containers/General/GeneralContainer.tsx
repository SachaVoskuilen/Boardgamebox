import { Selector } from '@/components';
import { Box, Flex, H2Title } from '@/styles';
import { useEffect, useState } from 'react';
import { BasicBlock } from './Basic';
import { BoardGameType, CategoryType, MechanicType } from '@/types';
import { TagFlex } from '@/components';
import { BasicInfoType } from './basicInfo.type';
import { useGetCategories, useGetDetailGame, useGetMechanics, useWindowState } from '@/hooks';
import { GetServerSidePropsContext } from 'next';

export const GeneralContainer = ({ id }: { id: string }) => {
  const { windowSize } = useWindowState();
  const [selectedDisplay, setDisplayChange] = useState('box');
  const options = [
    { value: 'box', label: 'Box' },
    { value: 'boardGameBox', label: 'BoardGameBox' },
  ];

  const handleChange = (updated: string) => {
    setDisplayChange(updated);
  };

  const [game, setGame] = useState<BoardGameType>({ id: '', name: '' });
  const { data: gameData } = useGetDetailGame(id);
  const { data: allCategories } = useGetCategories();
  const { data: allMechanics } = useGetMechanics();

  const [boxData, setBoxData] = useState<BasicInfoType>({});
  useEffect(() => {
    setBoxData({
      age: game.min_age,
      players: {
        minPlayers: game.min_players,
        maxPlayers: game.max_players,
      },
      duration: {
        minDuration: game.min_playtime,
        maxDuration: game.max_playtime,
      },
    });
  }, [game]);

  const [BGAData, setBGAData] = useState<BasicInfoType>({});
  useEffect(() => {
    setBGAData({
      age: game.min_age,
      players: {
        recPlayers: Math.round(game.min_players! + game.max_players!),
      },
      duration: {
        avgDuration: (game.min_playtime! + game.max_playtime!) / 2,
      },
      weight: game.average_learning_complexity,
    });
  }, [game]);

  useEffect(() => {
    if (gameData) {
      setGame({ ...gameData });
    }
  }, [gameData]);

  useEffect(() => {
    if (gameData! && gameData.categories && gameData.mechanics && allCategories && allMechanics) {
      const { categories: gameCategories, mechanics: gameMechanics } = gameData;
      let overlappingCategories: CategoryType[] = [];
      let overlappingMechanics: MechanicType[] = [];
      const fetchOverlappingData = async () => {
        if (gameCategories && gameMechanics) {
          const findOverlap = (
            existingIds: CategoryType[] | MechanicType[],
            compareObjects: CategoryType[] | MechanicType[],
          ): CategoryType[] | MechanicType[] => {
            const idSet = new Set<string>(existingIds.map((obj) => obj.id));
            const overlappingObjects: CategoryType[] | MechanicType[] = [];

            console.log(compareObjects);

            for (const obj of compareObjects) {
              if (idSet.has(obj.id)) {
                const { id, name } = obj;
                overlappingObjects.push({ id, name });
              }
            }
            return overlappingObjects;
          };

          overlappingCategories = findOverlap(gameCategories, allCategories);
          overlappingMechanics = findOverlap(gameMechanics, allMechanics);

          setGame((prevGame) => ({
            ...prevGame,
            categories: overlappingCategories,
            mechanics: overlappingMechanics,
          }));
        }
      };
      fetchOverlappingData();
    }
  }, [gameData, allCategories, allMechanics]);

  return (
    <Box>
      {windowSize.width < 750 ? (
        <Flex flexDirection={'column'}>
          <Box width={'100%'}>
            <Box maxWidth={'250px'}>
              <Selector options={options} defaultValue={options[0]} handleChange={handleChange} />
            </Box>
            {selectedDisplay == 'box' && <BasicBlock basicInfo={boxData} />}
            {selectedDisplay == 'boardGameBox' && <BasicBlock basicInfo={BGAData} />}
          </Box>
          <Box margin={'15px 0 0'}>
            <H2Title $bold>Category</H2Title>
            {game.categories && <TagFlex tags={game.categories.map((category) => category.name!)} />}
          </Box>
          <Box margin={'15px 0'}>
            <H2Title $bold>Mechanics</H2Title>
            {game.mechanics && <TagFlex tags={game.mechanics.map((mechanic) => mechanic.name!)} />}
          </Box>
        </Flex>
      ) : (
        <Flex flexDirection={'row'} flexWrap={'wrap'} margin={'25px 0'}>
          <Box width={'40%'}>
            <Box maxWidth={'250px'}>
              <Selector options={options} defaultValue={options[0]} handleChange={handleChange} />
            </Box>
            {selectedDisplay == 'box' && <BasicBlock basicInfo={boxData} />}
            {selectedDisplay == 'boardGameBox' && <BasicBlock basicInfo={BGAData} />}
          </Box>
          <Box width={'60%'}>
            <Box margin={'0 0 0 25px'}>
              <H2Title $bold>Category</H2Title>
              {game?.categories && <TagFlex tags={game?.categories.map((category) => category.name!)} />}
            </Box>
            <Box margin={'15px 0 0 25px'}>
              <H2Title $bold>Mechanics</H2Title>
              {game?.mechanics && <TagFlex tags={game?.mechanics.map((mechanic) => mechanic.name!)} />}
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  if (typeof params?.id === 'string') {
    return {
      props: {
        id: params.id,
      },
    };
  } else {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
}
