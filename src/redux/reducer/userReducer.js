import {
  FETCH_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../actionsType';

const initialState = {
  usersList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, usersList: action.payload };
    case ADD_USER:
      return { ...state, usersList: [action.payload, ...state.usersList] };

    case DELETE_USER:
      const newList = state.usersList.filter(
        (user) => user.id !== action.payload
      );

      return { ...state, usersList: newList };

    case UPDATE_USER:
      const ind = state.usersList.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.usersList[ind] = action.payload;
      return state;
    default:
      return state;
  }
};

export default userReducer;
