import { Flex, H1Title } from 'styles';
import { Layout } from '@/components';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <Layout loading={false}>
      <Flex height={'90vh'} justifyContent={'center'} alignItems={'center'}>
        <Flex flexDirection={'column'}>
          <H1Title $bold $line>
            Page not found
          </H1Title>
          <Link href={'/'}>Return</Link>
        </Flex>
      </Flex>
    </Layout>
  );
}
