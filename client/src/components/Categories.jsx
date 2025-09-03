import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "../features/category/categorySlice"; // ✅ correct import
import Button from "@mui/joy/Button";
import { useNavigate } from 'react-router-dom';
import { getDishes } from "../features/menu/menuSlice";
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data,setData] =useState("")
  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(getCategories());  // Fetch categories when the component mounts
  }, [dispatch]);

  // Handle loading and error states
  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p>Error: {message}</p>;

  // Dispatch menu items based on category
  const getMenu = (cat_id) => {
    if (cat_id) {
      dispatch(getDishes(cat_id));  // Fetch dishes for selected category
      navigate(`/menu/${cat_id}`);  // Navigate to the specific category page
    } else {
      dispatch(getDishes());  // Fetch all dishes if no category is selected
      navigate('/menu');  // Optionally navigate to a default menu page
    }
  };
  const handleChange = (e)=>{
    setData(e.target.value)
    console.log(data)
  }

  return (
    <div className="category-buttons">
      <h2>Categories: </h2>
      <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Categories:</FormLabel>
        <FormGroup>
          {categories.map((category)=>(
            <FormControlLabel
            control={
              <Checkbox checked={category.name} onChange={handleChange}  name={category.name}/>
            }
            label={category.name}
          />
          ))}
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </Box>
      <Button onClick={() => getMenu()}>All</Button>  {/* Button for All Categories */}
      {categories?.map((category) => (
        <Button onClick={() => getMenu(category._id)} key={category._id}>
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
