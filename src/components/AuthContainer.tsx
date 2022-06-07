import { ReactNode } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

interface AuthContainerProps {
  children: ReactNode;
  title: string;
}

export default function AuthContainer({ title, children }: AuthContainerProps) {
  return (
    <Flex bg='gray.100' align='center' justify='center' h='100vh'>
      <Box bg='white' p={6} rounded='md' className='container'>
        <Heading fontSize='xl' fontWeight={600} textAlign='center'>
          {title}
        </Heading>
        {children}
      </Box>
    </Flex>
  );
}
