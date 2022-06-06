interface RootReducer {
  users: UserState;
}

// interface IUser {}}
type IUser = string;

type UserState = {
  data: IUser[] | [];
  maxPageNumber: number;
};

type UserAction = {
  type: string;
  payload: UserState;
};

type DispatchType = (action: UserAction) => void;
