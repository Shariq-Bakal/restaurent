
import Filter from '../components/Filter'
import Layout from '../components/Layout'
import Menu from '../components/Menu'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
const Menupage = () => {
  return (
    <Layout>
      <div className='search-button-menu'>
        <TextField fullWidth label="Seach" id="fullWidth" />
         <Button variant="contained" size="medium" sx={{backgroundColor:"#64dd17"}}>
          Search 
        </Button>
      </div>
      
      <div className='main-menu-container'>
        <Filter/>
        <Menu/>
      </div>
  </Layout>
    
  )
}

export default Menupage