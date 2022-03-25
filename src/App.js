
import './App.css';
import {Routes,Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from './Components/Services';
function App() {
  return (
    <>


    <div>
    <Routes>
        <Route path="/" element={ <Contact/> } />
        <Route path="about" element={ <About/> } />
        <Route path="home" element={ <Home/> }  />
        <Route path="services" element={ <Services/> } />
      </Routes>
    </div>


     </>

  );
}

export default App;
