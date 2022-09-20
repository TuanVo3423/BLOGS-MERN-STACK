import axios from "axios";

// const URL = 'https://blog-app-gang.herokuapp.com'; 
const URL = 'http://localhost:5000';

// posts route
export const fetchPosts = (cookie,payload) => axios.get(`${URL}`, {
    headers: {
        token: cookie,
    },
});
export const createPosts = (payload) => axios.post(`${URL}/posts/createPost`, payload);
export const updatePosts = (payload) => axios.put(`${URL}/posts/${payload._id}`, payload);
export const deletePosts = (payload) => axios.delete(`${URL}/posts/${payload}`);

// register routes

export const register = (payload) => axios.post(`${URL}/auth/register`,payload);
export const login = (payload) => axios.post(`${URL}/auth/login`,payload);
export const logout = () => axios.get(`${URL}/auth/logout`);