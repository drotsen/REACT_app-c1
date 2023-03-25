import "./App3.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contactpage } from "./pages/Contactpage";
import { Navbar } from "./pages/navbar";


function App() {
    
    
    return (
        <div className="App">
           <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/contact" element={<Contactpage/>} />
                <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
            </Routes>
           </Router>
        </div>  
    );
}

export default App;