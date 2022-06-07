import { useContext, useState, useEffect, Dispatch } from 'react';
import { AuthContext } from '../../context';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSomeUsers } from '../../redux';
import { Layout } from '../../components';

const PAGE_SIZE: number = 5;

function Dashboard() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const { authenticatedUser } = useContext(AuthContext);
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
    <Layout>
      {/* Header */}
      <h1>Panel administrativo</h1>
      {/* User list */}
      <ul>
        {users.map((user: any) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      {/* Pagination */}
      <button onClick={() => pageNumber > 0 && setPageNumber(pageNumber - 1)}>Página anterior</button>
      <button onClick={() => maxPageNumber > pageNumber && setPageNumber(pageNumber + 1)}>Siguiente pagina</button>
    </Layout>
  );
}

export default Dashboard;
