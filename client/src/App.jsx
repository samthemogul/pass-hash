import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import ProtectedRoutes from './pages/ProtectedRoutes';
import SignedRoutes from './pages/SignedRoutes';
import Generator from './views/Generator';
import Vault from './views/Vault';
import Settings from './views/Settings';
import Accounts from './views/Accounts';
import DashboardHome from './views/DashboardHome';


function App() {
  const isSignedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      {!isSignedIn && <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Login />}/>
                  <Route path="/register" element={<Register />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route element={<ProtectedRoutes />}>
                    <Route path="*" element={<Login />}/>
                  </Route>
                  
                </Routes>
              </BrowserRouter>}
      {isSignedIn && <BrowserRouter>
      <Routes>
        <Route element={<SignedRoutes />}>
            <Route path='*' element={<Dashboard isSignedIn={isSignedIn} />} />
        </Route>
          <Route path='dashboard/*' element={<Dashboard isSignedIn={isSignedIn} />} />
      </Routes>
      {/* <Dashboard /> */}
      </BrowserRouter>}
    </>
  )
}

export default App
