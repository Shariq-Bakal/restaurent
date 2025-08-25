import Layout from '../components/Layout'
import Speciality from '../components/Speciality';
import Ourfeatures from '../components/Ourfeatures';
import Reservations from '../components/Reservations';
import Categories from '../components/Categories';
import Spinner from '../components/spinner';
import { Link } from 'react-router-dom';
import Details from '../components/Details';
import FoodImages from '../components/FoodImages';
import Button from '@mui/material/Button';
const Homepage = () => {
    
  return (
    <Layout>
      <div className='homepagecontainer'>
        <h1>Healthy Dishes</h1>
        <p className='homepagecontainer-description' >You should taste for yourself and also this resturant provides a healthy food.</p>

        <Button variant="outlined" color='red'><Link to="/menu">Explore Menu</Link></Button>
      </div>
      <Ourfeatures/>
      <Details/>
      <FoodImages/>
      <Reservations/>
      
    </Layout>
  )
}

export default Homepage