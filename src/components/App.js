import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";

import Cart from "./Cart";
import Contact from "./Layout";
function App(){
    return <>
    
    <Routes>
    
    
    
  <Route path="/" element={<Home />}></Route>
  <Route path="/cart" element={<Cart />}></Route>
  
  <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    
    </>
    
}
export default App;