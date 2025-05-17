import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectsList from './Components/Projects/ProjectsList';
import ProjectDetail from './Components/Projects/ProjectDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <MyWork />
            <Contact />
          </>
        } />

        <Route path="/projects" element={
          <>
            <ProjectsList />
            <Footer />
          </>
        } />

        <Route path="/projects/:id" element={
          <>
            <ProjectDetail />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
