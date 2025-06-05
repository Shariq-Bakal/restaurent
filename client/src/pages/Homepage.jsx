import Layout from '../components/Layout'
import Button from '@mui/material/Button';
import Speciality from '../components/Speciality';
import Ourfeatures from '../components/Ourfeatures';
import Reservations from '../components/Reservations';
const Homepage = () => {
    
  return (
    <Layout>
      <div className='homepagecontainer'>
        <h1>WELCOME</h1>
        <p>You should taste for yourself</p>
        <Button size='large' variant="outlined" color='#121212' sx={{width:"fit-content",marginTop:6}}>Book a table</Button>
      </div>
      <Speciality/>
      <Reservations/>
      <Ourfeatures/>
    </Layout>
  )
}

export default Homepage