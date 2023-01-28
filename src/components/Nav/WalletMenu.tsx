import { Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { FiLogOut } from 'react-icons/fi';
import '@fontsource/inter/variable.css';

const WalletMenu = () => {
  const { publicKey, disconnect } = useWallet();

  return (
    <Menu variant="primary">
      <MenuButton
        _hover={{ bg: '#1a1a1b' }}
        bg="#131314"
        border="thin solid"
        borderColor="rgb(34, 35, 37)"
        color="white"
        cursor="pointer"
        fontFamily="primary"
        fontSize="sm"
        fontWeight="medium"
        h="10"
        px="6"
        rounded="md"
        transition="all 0.2s"
      >
        <Text fontWeight="medium">
          {publicKey?.toString().slice(0, 6) +
            '...' +
            publicKey?.toString().slice(-4)}
        </Text>
      </MenuButton>

      <MenuList>
        <MenuItem color="red.400" onClick={disconnect}>
          <FiLogOut />
          <Text>Logout</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default WalletMenu;
