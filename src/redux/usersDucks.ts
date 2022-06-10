import { db } from '../config';
import { addDoc, collection, query, orderBy, getDocs } from 'firebase/firestore';

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

const usersRef = collection(db, 'users');

// actions
export const getSomeUsers = (pageNumber: number, pageSize: number) => {
  return async (dispatch: DispatchType) => {
    const q = query(usersRef, orderBy('name'), orderBy('identification'));
    const querySnapshot = await getDocs(q);
    let users: Users = [];

    querySnapshot.forEach(doc => {
      users = [...users, doc.data() as IUser];
    });

    const maxPageNumber = Math.ceil(users.length / pageSize) - 1;
    const data = users.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);

    dispatch({
      type: GET_SOME_USERS,
      payload: {
        data,
        maxPageNumber,
      },
    });
  };
};

export const addUser = (user: IUser) => {
  return async (dispatch: DispatchType, getState: () => RootReducer) => {
    await addDoc(usersRef, user).then(() => {
      const state = getState().users;
      const users = [...state.data, user];

      dispatch({
        type: ADD_USER,
        payload: {
          ...state,
          data: users,
        },
      });
    });
  };
};
