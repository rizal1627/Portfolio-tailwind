// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from "./main/index"
import Home from "./components/home"
import About from './main/section/About';
import Projects from './main/section/Projects';
import Admin from './main/admin/dashboard';
import Login from './main/admin/login';
import Skills from './main/section/Skills';



function App() {
  return (
    <>
    {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
