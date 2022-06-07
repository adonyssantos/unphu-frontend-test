import { ReactNode } from 'react';
import { Flex, Link as LinkUI } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface NavlinkProps {
  children: ReactNode;
  to: string;
}

export default function Navlink({ children, to }: NavlinkProps) {
  return (
    <LinkUI as={Link} to={to} style={{ textDecoration: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'blue.500',
          color: 'white',
        }}
      >
        {children}
      </Flex>
    </LinkUI>
  );
}
