import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "../features/category/categorySlice"; // ✅ correct import
import Button from "@mui/joy/Button";
import { useNavigate } from 'react-router-dom';
import { getDishes } from "../features/menu/menuSlice";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Divider } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

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
   console.log(categories)

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
    <>
    <List >
      <h2>Categories: </h2>
      <ListItem onClick={() => getMenu()}>All</ListItem>
        {/* Button for All Categories */}
      {categories?.map((category) => (
        <>
        <ListItem onClick={() => getMenu(category._id)} key={category._id}>
          {category.name}
        </ListItem>
        </>

      ))}
      <Divider/>
    </List>
    
    </>
  );
};

export default Categories;
