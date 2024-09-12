import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Service";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
