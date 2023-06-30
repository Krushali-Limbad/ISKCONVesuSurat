import Navbar from "./Components/Navbar.js";
import "./App.css";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Books from "./Components/Books.js";
import Donation from "./Components/Donation.js";
import Contact from "./Components/Contact.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/books" element={<Books />}></Route>
          <Route exact path="/Donation" element={<Donation />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>

          <Route path="* " element={<h1>NOt Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Home />
      <About />
      <Books />
      <Donation />
      <Contact /> */}
    </>
  );
}

export default App;
