import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Welcome from "./sections/Welcome.jsx";
import Projects from "./sections/Projects.jsx";
import ProjectModal from "./components/ProjectModal.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App(){

  return(
      <div className="bg-black">
  <BrowserRouter>
      <Header />
      <Welcome />

      <About />

      <Projects />
        {/*<ProjectModal />*/}

      <Contact />
      <Footer />

<Routes>
      <Route path="/project/:id" element={<ProjectModal />} />
</Routes>
  </BrowserRouter>
      </div>
  )
}
// bg-[#110919]