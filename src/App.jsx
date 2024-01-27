import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import MakeAppointment from './pages/Student/MakeAppointment';
import Home from './pages/Home/Home';
import StudentLogin from './pages/Login/StudentLogin';
import SelectTeacher from './pages/Student/SelectTeacher';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/make-appointment' element={<MakeAppointment/>}/>
        <Route path='/select' element={<SelectTeacher/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/student-login' element={<StudentLogin/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
// login
// öğrenci için randevu alma sayfası
// öğretmen için randevu onay ve müso olduğu zamanları seçme