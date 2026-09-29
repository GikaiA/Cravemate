
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Register />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
