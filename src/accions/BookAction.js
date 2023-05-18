import axios from "axios";
import { size } from 'lodash';
import { ADD_BOOKS, GET_BOOKS, USER_BOOKS } from '../ActionTypes';


const getActions = (type, payload) => ({
  type,
  payload,
});

export const getAllBooks = () => (dispatch, getState) => {
  const { BookReducer} = getState();
  if(size(BookReducer.books) === 0){
    return axios
    .get('api/books')
    .then((res) => {
     console.log(res.data);
     dispatch(GET_BOOKS, res.data);
    })
    .catch(() => {
      console.error('No se pudieron cargar los libros');
    });
  }
  return Promise.resolve();
}

export const getUserBooks = (id) => (dispatch, getState) => {
  const { BookReducer} = getState();
  if(size(BookReducer.books) === 0){
    return axios
    .get(`/api/request/{$id}`)
    .then((res) => {
     console.log(res.data);
     dispatch(USER_BOOKS, res.data);
    })
    .catch(() => {
      console.error('No se pudieron cargar los libros');
    });
  }
  return Promise.resolve();
}

export const addBank = (data) => (dispatch) => axios
  .post('api/books', data)
  .then((response) => {
    dispatch(getActions(ADD_BOOKS, response.data));
    return response.data;
  });