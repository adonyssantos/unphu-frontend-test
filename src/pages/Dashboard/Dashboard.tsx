import { useState, useEffect, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSomeUsers } from '../../redux';
import { Layout, PrivateRoute } from '../../components';

const PAGE_SIZE: number = 5;

export default function Dashboard() {
  const [pageNumber, setPageNumber] = useState<number>(0);
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

  return (
    <PrivateRoute>
      <Layout>
        <h1 className='title'>Panel administrativo</h1>
        <ul>
          {users.map((user: any) => (
            <li className='card' key={user}>
              {user}
            </li>
          ))}
        </ul>
        {/* Pagination */}
        <section className='pagination-container'>
          <button onClick={() => pageNumber > 0 && setPageNumber(pageNumber - 1)}>Página anterior</button>
          <button onClick={() => maxPageNumber > pageNumber && setPageNumber(pageNumber + 1)}>Siguiente pagina</button>
        </section>
      </Layout>
    </PrivateRoute>
  );
}
