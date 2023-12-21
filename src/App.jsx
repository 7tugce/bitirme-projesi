import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import MakeAppointment from './pages/Student/MakeAppointment';
import Home from './pages/Home/Home';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/make-appointment' element={<MakeAppointment/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
// login
// öğrenci için randevu alma sayfası
// öğretmen için randevu onay ve müso olduğu zamanları seçme