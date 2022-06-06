import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Login, Signin } from './pages';
import { AuthProvider } from './context';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='login' element={<Login />} />
        <Route path='signin' element={<Signin />} />
        <Route path='*' element={<Navigate to='/dashboard' />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
