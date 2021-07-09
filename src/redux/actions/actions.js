import {
  FETCH_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../actionsType';
import * as api from './api';

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({
      type: FETCH_USERS,
      payload: data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    alert(message);
  }
};

export const addNewUser = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addUser(formData);
    dispatch({
      type: ADD_USER,
      payload: data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    alert(message);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    alert(message);
  }
};

export const updateUserDetails = (formData, user) => async (dispatch) => {
  try {
    await api.updateUser(formData, user.id);
    const newData = { ...user, ...formData };
    dispatch({
      type: UPDATE_USER,
      payload: newData,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    alert(message);
  }
};
