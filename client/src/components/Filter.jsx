import Box from '@mui/material/Box';
import Categories from './Categories';


const Filter = () => {
  return (
    <Box sx={{ border: '2px solid red', height: '100vh', padding: 2 }}>
      <h2>Category</h2>
      
    <Categories/>
    </Box>
  );
};

export default Filter;
