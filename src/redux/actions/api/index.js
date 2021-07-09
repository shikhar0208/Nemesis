import axios from 'axios';

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchUsers = () => API.get('/users/');
export const addUser = (formData) => API.post('/posts', formData);
export const updateUser = (formData, id) => API.patch(`/posts/${id}`, formData);
export const deleteUser = (id) => API.delete(`/posts/${id}`);
