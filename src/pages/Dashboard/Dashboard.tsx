import { useState, useEffect, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSomeUsers } from '../../redux';
import { Layout, PrivateRoute } from '../../components';

const PAGE_SIZE: number = 2;

export default function Dashboard() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const dispatch = useDispatch() as Dispatch<unknown>;
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
        <ul className='cards-group'>
          {users.map((user: IUser) => (
            <li className='card' key={`user-${user.name}-${user.identification}`}>
              <h1 className='card-title'>{user.name}</h1>
              <h2 className='card-subtitle'>Detalles del usuario:</h2>
              <p className='card-text'>
                <b>Cédula:</b> {user.identification}
              </p>
              <p className='card-text'>
                <b>Nombre completo:</b> {user.name} {user.surname} {user.lastName}
              </p>
              <p className='card-text'>
                <b>Correo electrónico:</b> {user.email}
              </p>
              <p className='card-text'>
                <b>Género:</b> {user.gender === 'm' ? 'Masculino' : user.gender === 'f' ? 'Femenino' : 'Otro'}
              </p>
            </li>
          ))}
        </ul>
        {/* Pagination */}
        <section className='pagination-container'>
          <button onClick={() => pageNumber > 0 && setPageNumber(pageNumber - 1)}>Página anterior</button>
          <button className='btn' onClick={() => pageNumber < maxPageNumber && setPageNumber(pageNumber + 1)}>
            Siguiente pagina
          </button>
        </section>
      </Layout>
    </PrivateRoute>
  );
}
