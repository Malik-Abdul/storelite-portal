import { use, type ReactNode } from "react";
import "./App.css";
import AuthContextProvider from "./components/context/AuthContext";
import ThemeContextProvider from "./components/context/ThemeContext";
import Layout from "./components/Layout/Layout";
import { AuthContext } from "./components/context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { isLogin } = use(AuthContext);
  return isLogin ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Layout />
                </PrivateRoute>
              }
            />

            <Route path="/login" element={<Login />} />
          </Routes>
        </ThemeContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
