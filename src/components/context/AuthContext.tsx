import {
  createContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type AuthContextType = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};
export const AuthContext = createContext<AuthContextType>({
  isLogin: false,
  setIsLogin() {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin]);
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthContextProvider;
