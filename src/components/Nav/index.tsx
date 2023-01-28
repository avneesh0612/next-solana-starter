import { Flex, Text } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import WalletMenu from './WalletMenu';
const WalletMultiButton = dynamic(
  () =>
    import('@solana/wallet-adapter-react-ui').then(
      mod => mod.WalletMultiButton,
    ),
  { ssr: false },
);

const Nav: FC = () => {
  const { connected } = useWallet();

  return (
    <Flex
      align="center"
      color="white"
      justify="space-between"
      position="fixed"
      px={6}
      py={4}
      top={0}
      w="100%"
    >
      <Text>Next solana Template</Text>
      {connected ? <WalletMenu /> : <WalletMultiButton />}
    </Flex>
  );
};

export default Nav;
