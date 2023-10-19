import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';


function App() {
  const isSignedIn = true;

  return (
    <>
      {!isSignedIn && <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Login />}/>
                  <Route path="/register" element={<Register />}/>
                  <Route path="/login" element={<Login />}/>
                </Routes>
              </BrowserRouter>}
      {isSignedIn && <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
      </BrowserRouter>}
    </>
  )
}

export default App
