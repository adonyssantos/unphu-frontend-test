// this is an temporal user data until we add the database service
let usersData = [
  'user 1',
  'user 2',
  'user 3',
  'user 4',
  'user 5',
  'user 6',
  'user 7',
  'user 8',
  'user 9',
  'user 10',
  'user 11',
  'user 12',
  'user 13',
  'user 14',
  'user 15',
  'user 16',
  'user 17',
  'user 18',
  'user 19',
  'user 20',
];

// constants
const INITIAL_STATE = {
  data: [],
  maxPageNumber: 0,
};

const GET_SOME_USERS = 'GET_SOME_USERS';

// reducer
export default function usersReducer(state: UserState = INITIAL_STATE, action: UserAction) {
  switch (action.type) {
    case GET_SOME_USERS:
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
