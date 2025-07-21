import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../features/category/categorySlice"; // ✅ correct import
import Button from "@mui/joy/Button";
import { useNavigate } from 'react-router-dom';
import { getDishes } from "../features/menu/menuSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.category
  );
  console.log("Categories data:", categories);


  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {message}</p>;

  const getMenu = (cat_id)=>{
    console.log(cat_id)
    console.log("Click me")
    dispatch(getDishes(cat_id));
    navigate("/menu")
  }

  return (
    <div>
      {categories?.map((category) => (
        <Button onClick={()=>getMenu(category._id)} key={category._id}>{category.name}</Button>
      ))}
    </div>
  );
};

export default Categories;
