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

  return (
    <div className="category-buttons">
      <h2>Categories: </h2>
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
