import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Login } from './components/login';
import { Register } from './components/register';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/protectedRoutes';
import { ContentCategory } from './components/contentCategory';
import { ContentDetail } from './components/contentDetails';

function App() {
  return (
    <div className='bg-slate-300 h-screen flex'>
      <AuthProvider>
        <Routes>
          <Route path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
          <Route path='/contentCategory'
            element={
              <ProtectedRoute>
                <ContentCategory />
              </ProtectedRoute>
            } />
          <Route path='/contentDetail'
            element={
              <ProtectedRoute>
                <ContentDetail />
              </ProtectedRoute>
            } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
