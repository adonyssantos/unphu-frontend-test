import { useContext } from 'react';
import { AuthContext } from '../../context';
import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContainer } from '../../components';
import { AuthUser } from '../../context';

export default function Signin() {
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const email = data.get('email') as AuthUser['email'];
    const password = data.get('password') as AuthUser['password'];
    const firstName = data.get('firstName') as AuthUser['firstName'];
    const lastName = data.get('lastName') as AuthUser['lastName'];

    signin({
      email,
      password,
      firstName,
      lastName,
    }).then(() => {
      navigate('/dashboard');
    });
  };

  return (
    <AuthContainer title='Crear cuenta'>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align='flex-start' mt={4}>
          {/* Email field */}
          <FormControl>
            <FormLabel htmlFor='email'>Correo Electrónico:</FormLabel>
            <Input id='email' name='email' type='text' variant='filled' />
          </FormControl>

          {/* First Name field */}
          <FormControl>
            <FormLabel htmlFor='firstName'>Nombre:</FormLabel>
            <Input id='firstName' name='firstName' type='text' variant='filled' />
          </FormControl>

          {/* Last Name field */}
          <FormControl>
            <FormLabel htmlFor='lastName'>Apellido:</FormLabel>
            <Input id='lastName' name='lastName' type='text' variant='filled' />
          </FormControl>

          {/* Password field */}
          <FormControl>
            <FormLabel htmlFor='password'>Contraseña:</FormLabel>
            <Input id='password' name='password' type='password' variant='filled' />
          </FormControl>

          {/* Submit Button */}
          <Button type='submit' colorScheme='blue' width='100%'>
            Crear Cuenta
          </Button>

          {/* Link to /login */}
          <Button to='/login' as={Link} type='submit' width='100%'>
            Iniciar sesión
          </Button>
        </VStack>
      </form>
    </AuthContainer>
  );
}
