import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH='100vh' bg='gray.50'>
      <Sidebar onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <Sidebar onClose={onClose} display={{ base: 'block', md: 'none' }} />
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Header onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {children}
      </Box>
    </Box>
  );
}
