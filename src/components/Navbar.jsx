import React from "react";
import {  Link } from "react-router-dom";



function Navbar(){
    return <>
     
     <nav class="navbar navbar-expand-md navbar-dark bg-dark">
     <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon pb-5"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="/">E-shop</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        
        <Link smooth={true} to="/" offset={-150} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
        
        <Link smooth={true} to="/cart" offset={-150} className="nav-link" href="#">Carts<span className="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
        <Link smooth={true} to="/contact" offset={-150} className="nav-link" href="#">Contact<span className="sr-only">(current)</span></Link>
        </li>
        
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
      </nav>
     </>
}
export default Navbar;