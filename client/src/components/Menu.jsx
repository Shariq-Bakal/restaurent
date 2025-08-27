import { useSelector, useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useParams } from "react-router-dom";
//useParams is a React Router hook that lets you read variables from the URL.
import { getDishes } from "../features/menu/menuSlice";
import { useEffect } from "react";
import Categories from "./Categories";




const Menu = () => {
  const { menus = [], isLoading, error } = useSelector((state) => state.menu || {});
  // const { cat_id } = useParams(); //  This gets the ID from URL like /menu/123
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDishes())
  }, [dispatch]);

  return (
    <>
    <div className="search-input-container">
      <input type="text" id="search" className="search-input" placeholder="Search..." />
    </div>
    
    <Categories/>
    <div className="menu-container">
      {menus.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345, m :2 }}  >
            <CardActionArea>
              <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.price}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.description}
          </Typography>
        </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </div>
    </>
    
  );
};

export default Menu;
