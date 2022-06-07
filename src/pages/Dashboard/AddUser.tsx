import { useContext, useState, useEffect, Dispatch } from 'react';
import { AuthContext } from '../../context';
import { Navigate } from 'react-router-dom';
import { Layout } from '../../components';

export default function Dashboard() {
  const { authenticatedUser } = useContext(AuthContext);

  if (!authenticatedUser) {
    return <Navigate to='/login' />;
  }

  return (
    <Layout>
      <h1>Agregar nuevo usuario</h1>
    </Layout>
  );
}
