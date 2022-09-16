
import './App.css';
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes> 
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/contact" element={<Contact/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
