
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Categories from './Categories';
import { Divider } from "@mui/material";
import { Slider } from '@mui/material';

const Filter = () => {
  const data={
    min:0,
    max:200
  }
  // Function for formatting slider value
  function valuetext(min,max){
    console.log(min, max)
  }

  return (
    <Box sx={{ border: '0.5px solid silver', borderRadius: "0px", height: '100vh', padding: 1, margin: "10px" }}>
      <div className='search-button-menu'>
        <TextField fullWidth label="Search" id="fullWidth" variant='standard' />
      </div>
      <Divider sx={{ marginY: 2 }} />
      <Categories />
      <Divider sx={{ marginY: 2 }} />
      <Box sx={{ width: 300, padding: 2 }}>
        <h2>Price Range</h2>
        <Slider
          sx={{color:"#4db6ac"}}
          aria-label="Temperature" // Controlled value
          onChange={(e, newValue) => setValue(e.target.value, newValue.target.value)} // Update value
          getAriaValueText={valuetext}
           min={data.min}
           max={data.max}
           track="inverted"
           defaultValue={[0, 37]}
           aria-labelledby="track-inverted-range-slider"
           valueLabelDisplay="auto"
        />
      </Box>
      <Divider/>
    </Box>
  );
};

export default Filter;
