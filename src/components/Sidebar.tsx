import { Box, CloseButton, Flex, Text, BoxProps } from '@chakra-ui/react';
import Navlink from './Navlink';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export default function Sidebar({ onClose, ...props }: SidebarProps) {
  return (
    <Box
      transition='3s ease'
      bg='white'
      borderRight='1px'
      borderRightColor='gray.50'
      pos='fixed'
      w={{ base: 'full', md: 60 }}
      h='full'
      {...props}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          Navegación
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Navlink to='/dashboard'>Lista de usuarios</Navlink>
      <Navlink to='/dashboard/add'>Agregar usuario</Navlink>
    </Box>
  );
}
