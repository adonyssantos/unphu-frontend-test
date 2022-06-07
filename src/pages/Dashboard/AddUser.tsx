import { Layout, PrivateRoute } from '../../components';

export default function Dashboard() {
  return (
    <PrivateRoute>
      <Layout>
        <h1>Agregar nuevo usuario</h1>
      </Layout>
    </PrivateRoute>
  );
}
