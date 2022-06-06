import { useContext, useState, useEffect, Dispatch } from 'react';
import { AuthContext } from '../../context';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSomeUsers } from '../../redux';
import { AnyAction } from 'redux';

const PAGE_SIZE: number = 5;

function Dashboard() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const { authenticatedUser, logout } = useContext(AuthContext);
  const dispatch = useDispatch() as Dispatch<any>;
  const { users, maxPageNumber } = useSelector((state: RootReducer) => {
    return {
      users: state.users.data,
      maxPageNumber: state.users.maxPageNumber,
    };
  });

  useEffect(() => {
    dispatch(getSomeUsers(pageNumber, PAGE_SIZE));
  }, [pageNumber]);

  if (!authenticatedUser) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      {/* Header */}
      <h1>Panel administrativo</h1>
      <button onClick={logout}>Cerrar sesión</button>
      {/* User list */}
      <ul>
        {users.map((user: any) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      {/* Pagination */}
      <button onClick={() => pageNumber > 0 && setPageNumber(pageNumber - 1)}>Página anterior</button>
      <button onClick={() => maxPageNumber > pageNumber && setPageNumber(pageNumber + 1)}>Siguiente pagina</button>
    </>
  );
}

export default Dashboard;
