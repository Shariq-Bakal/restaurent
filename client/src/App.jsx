
import './App.css'
import ReservationTable from './components/ReservationTable'
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import Reservationpage from './pages/Reservationpage';
import '@fontsource/inter/400.css';  // Regular
import '@fontsource/inter/700.css';  // Bold
import Authpage from './pages/Authpage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Dashboardpage from './pages/Dashboardpage';
function App() {  

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/reservations' element={<Reservationpage/>}/>
      <Route path='/auth' element={<Authpage/>}/>
      <Route path='/login' element = {<Loginpage/>}/>
      <Route path='/register' element = {<Registerpage/>}/>
      <Route path='/dashboard' element = {<Dashboardpage/>}/>
    </Routes>
    </>
  )
}

export default App
