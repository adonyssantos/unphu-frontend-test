import { ReactNode, createContext, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthUser {
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
}

type AuthUserState = AuthUser | null;

// This context contain the auth user state
export const AuthContext = createContext({
  authenticatedUser: null as AuthUserState,
  login: async (user: AuthUser) => {},
  signin: async (newUser: AuthUser) => {},
  logout: async () => {},
});

export default function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [authenticatedUser, setAuthenticatedUser] = useState<AuthUserState>(null);

  const login = async (user: AuthUser) => {
    setAuthenticatedUser(user);
  };

  const signin = async (newUser: AuthUser) => {
    setAuthenticatedUser(newUser);
  };

  const logout = async () => {
    setAuthenticatedUser(null);
  };

  return <AuthContext.Provider value={{ authenticatedUser, login, signin, logout }}>{children}</AuthContext.Provider>;
}
