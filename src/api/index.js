import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/search.php'
})

export const get = async (search = '', setMeal, setError, handleToggle) => {
    const response = await api.get(`?s=${search}`);
    if (response.data.meals === null) {
        setMeal(response.data.meals);
    } else {
        setError(true);
    }
    handleToggle(false);
}