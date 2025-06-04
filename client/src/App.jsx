
import './App.css'
import ReservationTable from './components/ReservationTable'
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import Reservationpage from './pages/Reservationpage';
import '@fontsource/inter/400.css';  // Regular
import '@fontsource/inter/700.css';  // Bold


function App() {  

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/admin/reservations' element={<Reservationpage/>}/>
    </Routes>
    </>
  )
}

export default App
