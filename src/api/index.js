import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://secure-savannah-26896.herokuapp.com/api/meal'
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