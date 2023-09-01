
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Home from "./components/Home"
import ABOUTUS from './components/ABOUTUS'
import OFFER from "./components/OFFER";
import './App.css';

function App() {
  
  return(
   <Router>
    <Routes>
    <Route exact path ="/" element={<Home/>}/> 
   <Route exact path ="/about" element={<ABOUTUS/>}/> 
   <Route exact path ="/offer" element={<OFFER/>}/> 
   </Routes>

   </Router>
  )
}

export default App;
