import { ReactNode, createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../config';

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthUser {
  email: string;
  displayName?: string;
  password: string;
}

type AuthUserState = AuthUser | null;

// This context contain the auth user state
export const AuthContext = createContext({
  authenticatedUser: null as AuthUserState,
  login: async (user: AuthUser): Promise<AuthUser | Error | void> => {},
  signin: async (newUser: AuthUser): Promise<AuthUser | Error | void> => {},
  logout: async (): Promise<string | Error | void> => {},
});

export default function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [authenticatedUser, setAuthenticatedUser] = useState<AuthUserState>(null);

  const login = async (user: AuthUser) => {
    const { email, password } = user;

    return await signInWithEmailAndPassword(auth, email, password)
      .then(async authUser => {
        if (authUser) {
          const userData = {
            email: authUser.user.email as AuthUser['email'],
            displayName: authUser.user.displayName as AuthUser['displayName'],
            password: '' as AuthUser['password'],
          };

          setAuthenticatedUser(userData);
          return Promise.resolve(userData);
        }

        return Promise.reject(new Error('User not found'));
      })
      .catch(error => {
        return Promise.reject(new Error(error.code));
      });
  };

  const signin = async (newUser: AuthUser) => {
    const { email, password } = newUser;

    return await createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        if (userCredential) {
          const userData = {
            email: userCredential.user.email as AuthUser['email'],
            displayName: userCredential.user.displayName as AuthUser['displayName'],
            password: '' as AuthUser['password'],
          };

          setAuthenticatedUser(userData);
          return Promise.resolve(userData);
        }

        return Promise.reject(new Error('No se pudo crear el usuario'));
      })
      .catch(error => {
        return Promise.reject(new Error(error.code));
      });
  };

  const logout = async () => {
    return await signOut(auth)
      .then(() => {
        setAuthenticatedUser(null);
        return Promise.resolve('Logout success');
      })
      .catch(error => {
        return Promise.reject(new Error(error.code));
      });
  };

  return <AuthContext.Provider value={{ authenticatedUser, login, signin, logout }}>{children}</AuthContext.Provider>;
}
