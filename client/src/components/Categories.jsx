import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../features/category/categorySlice"; // ✅ correct import
import Button from "@mui/joy/Button";

const Categories = () => {
  const dispatch = useDispatch();

  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.category
  );
  console.log("Categories data:", categories);


  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {message}</p>;

  return (
    <div>
      {categories?.map((category) => (
        <Button key={category._id}>{category.name}</Button>
      ))}
    </div>
  );
};

export default Categories;
