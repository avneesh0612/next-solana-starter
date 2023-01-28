import MainLayout from '@/Layout/Main.layout';
import { Button, Heading, Text, Icon, Link } from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';

const Home = () => {
  return (
    <MainLayout>
      <Heading size="4xl">
        Create your Next Solana Project <br />
        in seconds.
      </Heading>
      <Text fontSize="lg" maxW="2xl" mt={4}>
        An opinionated Next.js template for building Solana applications pre
        configured with Chakra UI, Next.js, Solana wallet adapter, ESlint,
        Prettier, and more.
      </Text>

      <Link
        _hover={{ textDecor: 'none' }}
        href="https://github.com/avneesh0612/next-solana-starter"
        isExternal
      >
        <Button
          _active={{
            bg: 'blackAlpha.800',
            transform: 'scale(0.95)',
          }}
          _hover={{ bg: 'blackAlpha.600' }}
          bg="blackAlpha.700"
          color="white"
          mt={4}
          rounded="full"
          shadow="lg"
          size="lg"
        >
          <Icon as={FiGithub} mr={2} />
          Star on GitHub
        </Button>
      </Link>
    </MainLayout>
  );
};

export default Home;
