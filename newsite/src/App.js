/**personal */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar2 from "./Navbar2";
import Content from "./Content";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import AboutMe from "./AboutMe";
import ProjectsPage from "./ProjectsPage"; // Import ProjectsPage component
import "./App.css";
import { blogs } from "./blog";
import Advanceflex from "./Advanceflex";
import { useState } from "react";

// Layout component for the home page
const HomeLayout = () => (
  <>
    <Home />
  </>
);

export default function App() {
  return (
    <div>
      <Router>
        <Navbar2 />

        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/Home" element={<Content blog={blogs} />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* Add more routes as needed */}

          <Route path="/advanceflex" element={<Advanceflex />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
