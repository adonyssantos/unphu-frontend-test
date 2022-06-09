interface RootReducer {
  users: UserState;
}

interface IUser {
  name: string;
  surname: string;
  lastName?: string;
  identification: number;
  age: number;
  gender: 'm' | 'f' | 'o';
  address: string;
  address2?: string;
  phone: number;
  email: string;
  civilStatus: 'soltero' | 'casado' | 'divorciado' | 'viudo';
  hasChildren: 'si' | 'no';
  birthDate: Date | string;
}

type Users = IUser[] | [];

type UserState = {
  data: Users;
  maxPageNumber: number;
};

type UserAction = {
  type: string;
  payload: UserState;
};

type DispatchType = (action: UserAction) => void;

type FirestoreHookError =
  | {
      message: string;
      code: string;
    }
  | Error
  | null;
