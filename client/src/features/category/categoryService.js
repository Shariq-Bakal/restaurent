import axios from "axios";

const getCategories = async () => {
    const response = await axios.get('http://localhost:5000/api/categories'); // also fix typo in "catgories"
    return response.data;
};

const categoryService = {
    getCategories, // export inside an object
};

export default categoryService;
