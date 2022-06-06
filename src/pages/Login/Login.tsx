import { useContext } from 'react';
import { AuthContext } from '../../context';
import { Link } from 'react-router-dom';

function Login() {
  const { login } = useContext(AuthContext);

  return (
    <>
      <h1>Iniciar sesión</h1>
      <button onClick={login}>Iniciar sesión</button>
      <Link to='/dashboard'>Ir al Dashboard</Link>
    </>
  );
}

export default Login;
