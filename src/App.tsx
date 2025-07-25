import "./App.css";
import ThemeContextProvider from "./components/context/ThemeContext";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Layout />
      </ThemeContextProvider>
    </>
  );
}

export default App;
