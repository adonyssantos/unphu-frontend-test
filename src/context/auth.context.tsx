import { ReactNode, createContext, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthUser {
  email: string;
  token: string;
}

type AuthUserState = AuthUser | null | boolean; // boolean type is for test the views until the auth is done

// This context contain the auth user state
export const AuthContext = createContext({
  authenticatedUser: null as AuthUserState,
  login: () => {},
  signin: () => {},
  logout: () => {},
});

export default function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [authenticatedUser, setAuthenticatedUser] = useState<AuthUserState>(null);

  const login = () => {
    setAuthenticatedUser(true);
  };

  const signin = () => {
    setAuthenticatedUser(true);
  };

  const logout = () => {
    setAuthenticatedUser(null);
  };

  return <AuthContext.Provider value={{ authenticatedUser, login, signin, logout }}>{children}</AuthContext.Provider>;
}
