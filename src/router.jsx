import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Games from "./pages/games.jsx";
import Apps from "./pages/apps.jsx";
import About from "./pages/about.jsx";
import Error from "./pages/error.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
