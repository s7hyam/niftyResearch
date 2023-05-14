import { ThemeProvider } from "@mui/material/styles";

import "./App.css";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./theme";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/slices/theme";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const mode = useSelector(selectTheme);
  return (
    <>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
