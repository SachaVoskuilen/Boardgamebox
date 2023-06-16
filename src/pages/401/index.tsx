import { Flex, H1Title } from 'styles';
import { Layout } from '@/components';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function FourOhOne() {
  return (
    <Layout loading={false}>
      <Flex height={'90vh'} justifyContent={'center'} alignItems={'center'}>
        <Flex flexDirection={'column'}>
          <H1Title $bold $line>
            No permission
          </H1Title>
          <button onClick={() => signIn}>Signin</button>
          <Link href={'/'}>Return</Link>
        </Flex>
      </Flex>
    </Layout>
  );
}
