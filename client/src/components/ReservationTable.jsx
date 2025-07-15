import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from 'react';
import axios from "axios"
import { Button } from '@mui/material';
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ReservationTable() {
  const [reservationData, setReservationData] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
  axios.get('http://localhost:5000/api/reservations',{params: {
        page: page,  // Page number
        limit: 4  // Number of items per page
      }, headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NWFlZDllN2FjZWJjMDA1NDAzODg3MiIsImlhdCI6MTc1MDc4OTU2MiwiZXhwIjoxNzUzMzgxNTYyfQ.t_63fTEGGNlvD25LncoFuxOEpthbQYASFp627Uhpij0`  // Send the token in the Authorization header
      }},) 
    .then(res => {
      setReservationData(res.data);
      console.log(res.data)
    })
    .catch(error => {
      console.log(error);
    });
}, [page]);
  
  return (
    <TableContainer component={Paper} sx={{maxWidth:1000, margin:'auto', marginTop:10}}>
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#1976d2'}}>
          <TableRow>
            <TableCell align='center' sx={{ color: 'white'}}>id</TableCell>
            <TableCell align='center' sx={{ color: 'white'}}>Date</TableCell>
            <TableCell align='center' sx={{ color: 'white'}}>Time slot</TableCell>
            <TableCell align='center' sx={{ color: 'white'}}>Total guests</TableCell>
            <TableCell align='center' sx={{ color: 'white'}}>table</TableCell>
            <TableCell align='center' sx={{ color: 'white'}}>Time slot</TableCell>
            <TableCell align='center' sx={{ color: 'white'}}>Status</TableCell>
            <TableCell align='center' sx={{ color: 'white'}}>user</TableCell>
            <TableCell align='center' sx={{ color: 'white'}}>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservationData.map((reservation) => (
            <TableRow
              key={reservation._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {reservation._id}
              </TableCell>
              <TableCell align='center'>{reservation.fullName}</TableCell>
              <TableCell align='center'>{reservation.date}</TableCell>
              <TableCell align='center'>{reservation.timeSlot }</TableCell>
              <TableCell align='center'>{reservation.totalGuests}</TableCell>
              <TableCell align='center'>{reservation.table}</TableCell>
              <TableCell align='center'>{reservation.status}</TableCell>
              <TableCell align='center'>{reservation.user}</TableCell>
              <TableCell align='center'><Button><CiEdit /></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
