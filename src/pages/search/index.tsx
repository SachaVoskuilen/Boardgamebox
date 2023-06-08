import { Layout } from '@/components';
import { StyledText } from '@/styles';
import { FC } from 'react';

const SearchPage: FC = () => {
  return (
    <Layout loading={false}>
      <StyledText>search</StyledText>
    </Layout>
  );
};

export default SearchPage;
