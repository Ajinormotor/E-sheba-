import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import History from "../pages/History";
import Application from "../pages/Application";
import { AnimatePresence } from "framer-motion";

const Routs = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/application" element={<Application />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routs;
