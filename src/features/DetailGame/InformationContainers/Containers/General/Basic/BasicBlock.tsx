import { FC } from 'react';
import { StyledBasicBlock } from '.';
import { Flex, Grid, H3Title, StyledText } from '@/styles';
import { BasicInfoType } from '../basicInfo.type';

type basicBlockType = {
  basicInfo: BasicInfoType;
};

export const BasicBlock: FC<basicBlockType> = ({ basicInfo }) => {
  const { age, players, duration, weight } = basicInfo;
  return (
    <Grid
      gridTemplateColumns={'1fr 1fr'}
      backgroundColor={'lightGray'}
      borderRadius={'5px'}
      padding={'0 25px'}
      margin={'10px 0'}
    >
      <StyledBasicBlock>
        <H3Title $bold>Age</H3Title>
        <H3Title $bold>Players</H3Title>
        <H3Title $bold>Duration</H3Title>
        <H3Title $bold>Weight</H3Title>
      </StyledBasicBlock>
      <StyledBasicBlock>
        <Flex alignItems={'center'}>
          <StyledText>{age || '-'} +</StyledText>
        </Flex>
        <Flex alignItems={'center'}>
          {players?.recPlayers ? (
            <StyledText>{players.recPlayers}</StyledText>
          ) : (
            <StyledText>
              {players?.minPlayers || ' / '} - {players?.maxPlayers || ' / '}
            </StyledText>
          )}
        </Flex>
        <Flex alignItems={'center'}>
          {duration?.avgDuration ? (
            <StyledText>{duration.avgDuration}</StyledText>
          ) : (
            <StyledText>
              {duration?.minDuration || ' / '} -{duration?.maxDuration || ' / '}
            </StyledText>
          )}
        </Flex>
        <Flex alignItems={'center'}>
          <StyledText>{weight ? `${(Math.round(weight * 100) / 100).toFixed(2)} / 5` : '-'}</StyledText>
        </Flex>
      </StyledBasicBlock>
    </Grid>
  );
};
