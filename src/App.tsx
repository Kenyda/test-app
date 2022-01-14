import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Navigation from "./components/UI/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
