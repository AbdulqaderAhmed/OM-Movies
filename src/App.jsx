import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/app.css";
import Index from "./components/Index";
import Header from "./layouts/Header/Header";

export default function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>

      <footer>footer</footer>
    </div>
  );
}
