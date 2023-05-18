import { ADD_BOOK, GET_BOOKS, USER_BOOKS } from '../ActionTypes';

const initialState = {
  books: [],
  status: {
    isPending: false,
    isRejected: false,
    errData: {},
  },
};

const BookReducer = (state = initialState, action) => {
  
  const { type, payload } = action;
  
  if(type === GET_BOOKS){
    return {
      ...state,
      books: payload,
    };
  }

  if(type === USER_BOOKS){
    return {
      ...state,
      books: payload
    }
  }

  if(type === ADD_BOOK){
    return {
      ...state,
      books: payload
    }
  }

  return state;
};

export default BookReducer;