import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./AppRouter";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
