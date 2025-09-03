import Box from '@mui/material/Box';
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';  
import Categories from './Categories';


const Filter = () => {
  return (
    <Box sx={{ border: '1px solid silver', height: '100vh', padding: 2,margin:"10px" }}>
      <div className='search-button-menu'>
        <TextField fullWidth label="Seach" id="fullWidth" />
         <Button variant="contained" size="medium" sx={{backgroundColor:"#64dd17",margin:"2px"}}>
          Search 
        </Button>
      </div>
      <Categories/>
    </Box>
  );
};

export default Filter;
