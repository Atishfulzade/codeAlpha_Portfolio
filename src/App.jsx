import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Loader,
} from "./components";
import Error from "./components/Error";
import { useEffect, useState } from "react";

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative z-[0] bg-[#050816] scroll-smooth">
      <div className="bg-primary-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <div className="container">
          {isAppLoading && <Loader />}
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
