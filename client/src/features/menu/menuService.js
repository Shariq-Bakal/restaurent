import axios from "axios";

export const getDishes = async (category) => {
    try {
        console.log("Fetching dishes for category:", category);
        const response = await axios.get(`http://localhost:5000/api/menus?category=${category}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

const menuService = {
    getDishes,
};

export default menuService;
