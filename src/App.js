import './App.css';
import { Routes, Route } from "react-router-dom";
import Coustomers from './components/Coustomers.js';
import Demos from './components/Demos.js';
import DemoScript from './components/DemoScript.js';
import Product from './components/Products.js';
import SalceTeam from './components/SalceTeam.js';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Userdata from './components/Userdata';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="home">
      <Sidebar/>
           <Routes>
             <Route path="/" element={<Userdata />}></Route>
             <Route path="Products" element={<Product/>} />
             <Route path="Coustomers" element={<Coustomers/>} />
             <Route path="DemoScript" element={<DemoScript/>} />
             <Route path="Demo" element={<Demos/>} />
             <Route path="SalceTeams" element={<SalceTeam/>} />
           </Routes>
      </div>
    </div>
  );
}

export default App;
