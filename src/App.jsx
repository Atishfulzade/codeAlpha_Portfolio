import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import Error from "./components/Error";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-primary-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<DefaultRoute />} />
            <Route path="/about" element={<About />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const DefaultRoute = () => {
  return (
    <div>
      <Hero />
      <About />
      <Tech />
      <Experience />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
