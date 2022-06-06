import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Login, Signin } from './pages';
import { AuthProvider } from './context';
import { Provider as ReduxProvider } from 'react-redux';
import generateStore from './redux/store';

function App() {
  const store = generateStore();

  return (
    <AuthProvider>
      <ReduxProvider store={store}>
        <Routes>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='login' element={<Login />} />
          <Route path='signin' element={<Signin />} />
          <Route path='*' element={<Navigate to='/dashboard' />} />
        </Routes>
      </ReduxProvider>
    </AuthProvider>
  );
}

export default App;
