import { use } from "react";
import "./App.css";
import AuthContextProvider from "./components/context/AuthContext";
import ThemeContextProvider from "./components/context/ThemeContext";
import Layout from "./components/Layout/Layout";
import LoginForm from "./components/organisms/LoginForm";
import { AuthContext } from "./components/context/AuthContext";

function App() {
  const { isLogin } = use(AuthContext);
  return (
    <>
      <AuthContextProvider>
        <ThemeContextProvider>
          {isLogin ? <Layout /> : <LoginForm />}
          <Layout />
        </ThemeContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
