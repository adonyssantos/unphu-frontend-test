import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Login, Signin } from './pages';

function App() {
  return (
    <Routes>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='login' element={<Login />} />
      <Route path='signin' element={<Signin />} />
      <Route path='*' element={<Navigate to='/dashboard' />} />
    </Routes>
  );
}

export default App;
