import React from "react";
function Cards(){
    return <>
<div class=" cards row">
  
  
  <div class="col-5 IMAGE ">
  
    <img src="iphone.jpg" class="img-thumbnail " alt="imga"></img>
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
     <h4>Iphone 14</h4>
     <h3>Rs.1,23,000</h3>
      <p>Color:Black</p>
      <h5 class="text-danger">Out of Stock</h5>
      <div class="row ">
      <button type="button" class="btn btn-light btno me-2  col-md-4">Delete</button>
      <button type="button" class="btn btn-info col-md-4">See more like this</button>
  </div>
      </div>
      
    
  </div>
    </>
}
export default Cards;