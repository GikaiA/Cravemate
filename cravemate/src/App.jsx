
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
function App() {


  return (
    <AuthProvider>
     <BrowserRouter>
     <Navbar />
     <main className="flex-1">
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Register />} />
     </Routes>
     </main>
     <Footer />
     </BrowserRouter>
    </AuthProvider>
  )
}

export default App
