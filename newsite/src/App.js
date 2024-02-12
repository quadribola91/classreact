import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home"; // Import your HomeLayout component here
import Content from "./Content";
import { blogs } from "./blog";
import Card from "./Card"; // Import your Card component here
import AboutMe from "./AboutMe";
import SkillsCard from "./Advanceflex";
import Articles from "./Articles";
import Stories from "./Stories";
import ProjectsPage from "./ProjectsPage";
import Contact from "./Contact";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Content blog={blogs} />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/skills" element={<SkillsCard />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/card" element={<Card />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
