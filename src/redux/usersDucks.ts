import { db } from '../config';
import { addDoc, collection } from 'firebase/firestore';

// constants
const INITIAL_STATE = {
  data: [],
  maxPageNumber: 0,
};

const GET_SOME_USERS = 'GET_SOME_USERS';
const ADD_USER = 'ADD_USER';

// reducer
export default function usersReducer(state: UserState = INITIAL_STATE, action: UserAction) {
  switch (action.type) {
    case GET_SOME_USERS:
      return {
        ...state,
        data: action.payload.data,
        maxPageNumber: action.payload.maxPageNumber,
      };

    case ADD_USER:
      return {
        ...state,
        data: action.payload.data,
        maxPageNumber: action.payload.maxPageNumber,
      };

    default:
      return state;
  }
}

// actions
export const getSomeUsers = (pageNumber: number, pageSize: number) => {
  const usersData: any = [];

  return (dispatch: DispatchType) => {
    // a pagination
    const users = usersData.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
    const maxPageNumber = Math.ceil(usersData.length / pageSize) - 1;

    if (pageNumber > maxPageNumber) {
      return;
    }

    dispatch({
      type: GET_SOME_USERS,
      payload: { data: users, maxPageNumber },
    });
  };
};

export const addUser = (user: IUser) => {
  return async (dispatch: DispatchType, getState: () => RootReducer) => {
    await addDoc(collection(db, 'users'), user).then(() => {
      const state = getState().users;

      dispatch({
        type: ADD_USER,
        payload: {
          data: [...state.data, user],
          maxPageNumber: 0,
        },
      });
    });
  };
};
