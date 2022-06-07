import { useContext, ReactNode } from 'react';
import { AuthContext } from '../context';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { authenticatedUser } = useContext(AuthContext);

  if (!authenticatedUser) {
    return <Navigate to='/login' />;
  }

  return <>{children}</>;
}
