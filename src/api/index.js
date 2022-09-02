import axios from "axios";

const URL = 'http://localhost:5000'; 

export const fetchPosts = () => axios.get(`${URL}`);
export const createPosts = (payload) => axios.post(`${URL}/posts/createPost`, payload);
export const updatePosts = (payload) => axios.put(`${URL}/posts/${payload._id}`, payload);
export const deletePosts = (payload) => axios.delete(`${URL}/posts/${payload}`);