import React from "react";
import Cards from "./Cards";
import Navbar from "./Navbar";

function Cart(){
return<>
   <Navbar />
   <div class="input-group mt-2 px-3">
    <input type="text" class="form-control" placeholder="Search"></input>
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
  
  {/* <div class="card col-sm-12">
  
  <div class="card-body">
<div class="IMAGE ">

  <img src="iphone.jpg" class="img-thumbnail " alt="imga"></img>
  </div>
  <div class="Content ">
    <h5 class="card-title">Special title treatment</h5>
    </div>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/#" class="btn btn-primary" alt="img1">Go somewhere</a>
  </div>
</div> */}
<div class="container mt-2">
<Cards />
<div class=" cards row">
  
  
  <div class="col-5 IMAGE ">
  
    <img src="denim.jpeg" class="img-thumbnail " alt="imga"></img>
      <div class="row ">
      <div class="col-12 d-flex align-items-center ">
                  <button class="circle mx-2" >
                    -
                  </button>
  
                  <input id="form1" min="0" name="quantity" value="2" type="number"
                    class="text-center form-control form-control-lg" />
  
                  <button class="circle mx-2">
                    +
                  </button>
                </div>
      </div>
    </div>
    <div class="col-7 Content ">
     <h4>Denim shirt</h4>
     <h3>Rs:2,300</h3>
      <p>Color:Blue</p>
      <h5 class="text-success">In stock</h5>
      <div class="row ">
      <button type="button" class="btn btn-light btno me-2  col-md-4">Delete</button>
      <button type="button" class="btn btn-info col-md-4">See more like this</button>
  </div>
      </div>
      
    
  </div>
  <div class=" cards row">
  
  
  <div class="col-5 IMAGE ">
  
    <img src="jordan.jpeg" class="img-thumbnail " alt="imga"></img>
      <div class="row ">
      <div class="col-12 d-flex align-items-center ">
                  <button class="circle mx-2" >
                    -
                  </button>
  
                  <input id="form1" min="0" name="quantity" value="2" type="number"
                    class="text-center form-control form-control-lg" />
  
                  <button class="circle mx-2">
                    +
                  </button>
                </div>
      </div>
    </div>
    <div class="col-7 Content ">
     <h4>Jordan Retros</h4>
     <h3>Rs:28,300</h3>
      <p>Color:Red</p>
      <h5 class="text-success">In stock</h5>
      <div class="row ">
      <button type="button" class="btn btn-light btno me-2  col-md-4">Delete</button>
      <button type="button" class="btn btn-info col-md-4">See more like this</button>
  </div>
      </div>
      
    
  </div>


</div>
<div className="text-center mb-5">
<h2>Subtotal = Rs 1,53,600</h2>
<button class="btn btn-info p-3 col-8"><strong>Proceed to Buy</strong></button>
</div>
</>
}
export default Cart;