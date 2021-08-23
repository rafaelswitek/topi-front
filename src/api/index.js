import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://topi.test/api/meal'
})

export const get = async (search = '', setMeal, setError, handleToggle) => {
    const response = await api.get(`/${search}`);
    if (response.status === 200) {
        setMeal(response.data.meals);
    } else {
        setError(true);
    }
    handleToggle(false);
}