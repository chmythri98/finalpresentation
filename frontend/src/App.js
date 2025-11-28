import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Problem from "./pages/Problem";
import Research from "./pages/Research";
import Solution from "./pages/Solution";
import Architecture from "./pages/Architecture";
import Dashboard from "./pages/Dashboard";
import Ethics from "./pages/Ethics";
import Reflection from "./pages/Reflection";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/research" element={<Research />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/reflection" element={<Reflection />} />
          </Routes>
        </div>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
