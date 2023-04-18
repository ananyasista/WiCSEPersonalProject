import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Projects from './component/pages/Projects';
import Experience from './component/pages/Experience';
import Home from './component/pages/Home';
import Footer from './component/Footer';
import DisplayProject from './component/pages/DisplayProject';

function App() {
  return (
    <div>
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
          <Route path="/displayProject/:id" element={<DisplayProject/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
