import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AuthContainer } from '../../components';

const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const email = data.get('email');
    const password = data.get('password');

    console.log({
      email,
      password,
    });
  };

  return (
    <AuthContainer title='Iniciar sesión'>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align='flex-start' mt={4}>
          {/* Email field */}
          <FormControl>
            <FormLabel htmlFor='email'>Correo Electrónico:</FormLabel>
            <Input id='email' name='email' type='text' variant='filled' />
          </FormControl>

          {/* Password field */}
          <FormControl>
            <FormLabel htmlFor='password'>Contraseña:</FormLabel>
            <Input id='password' name='password' type='password' variant='filled' />
          </FormControl>

          {/* Submit button */}
          <Button type='submit' colorScheme='blue' width='100%'>
            Iniciar Sesión
          </Button>

          {/* Link to /signin */}
          <Button to='/signin' as={Link} type='submit' width='100%'>
            Registrarse
          </Button>
        </VStack>
      </form>
    </AuthContainer>
  );
};

export default Login;
