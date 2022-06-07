import { useContext } from 'react';
import { AuthContext } from '../context';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  FlexProps,
} from '@chakra-ui/react';
import { FiMenu, FiChevronDown } from 'react-icons/fi';

interface Header extends FlexProps {
  onOpen: () => void;
}

export default function Header({ onOpen, ...props }: Header) {
  const { authenticatedUser, logout } = useContext(AuthContext);

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      alignItems='center'
      borderBottomWidth='1px'
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...props}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: '2', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar size={'sm'} />
                <VStack display={{ base: 'none', md: 'flex' }} alignItems='flex-start' spacing='1px' ml='2'>
                  <Text fontSize='ms'>{authenticatedUser?.displayName}</Text>
                  <Text fontSize='xs'>{authenticatedUser?.email}</Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem color='red' onClick={logout}>
                Cerrar sesión
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}
