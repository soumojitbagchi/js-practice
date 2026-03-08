import React from "react";
import { Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import About from "../../project9/src/pages/about";
import Home from "../../project9/src/pages/home";
import Product from "../../project9/src/pages/Product"
import Courses from "./pages/Courses";
import Coder from "../../project9/src/pages/coursePage"
import Excourses from "./pages/Excourses";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses/:id" element={<Excourses />} />
        </Route>
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
