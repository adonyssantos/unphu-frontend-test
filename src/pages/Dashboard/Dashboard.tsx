import { useContext } from 'react';
import { AuthContext } from '../../context';
import { Navigate } from 'react-router-dom';

function Dashboard() {
  const { authenticatedUser, logout } = useContext(AuthContext);

  if (!authenticatedUser) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      <h1>Panel administrativo</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </>
  );
}

export default Dashboard;
