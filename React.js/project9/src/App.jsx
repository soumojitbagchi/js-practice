import React from "react";
import { Route, Routes,Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NavBar from "./components/navBar";
import Product from "./pages/Product";
import MenProduct from "./pages/MenProduct";
import WomenProduct from "./pages/WomenProduct";
import RandomAbout from "./pages/RandomAbout";
import CoursePage from "./pages/coursePage";
import EXCourse from "./pages/EXCourse";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* {router page} */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/men" element={<MenProduct />} />
        <Route path="/product/women" element={<WomenProduct/>} />
        <Route path="/about/:id" element={<RandomAbout />} />
        <Route path="/course" element={<CoursePage />} />
        {/* {router dynamic page} */}
        <Route path="/course/:id" element={<EXCourse />} />
        <Route path="/about/:id" element={<RandomAbout />} />
        {/* {router nested dynamic page} */}
        <Route path="/course/:id/details" element={<CourseDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
