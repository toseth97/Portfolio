
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  

  return (
    <div className="App">
      
      <Router>
      <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
