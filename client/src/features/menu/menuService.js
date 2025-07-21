import axios from "axios";

export const getDishes = async (category) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/menus?category=${category}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

const menuService = {
    getDishes,
};

export default menuService;
