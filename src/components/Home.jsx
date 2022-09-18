import React from "react";
import Navbar from "./Navbar";





function Home(){
    return <>
    <Navbar />
    {/* <img src="bg.jpg" alt="background"></img> */}
    
    <section class="vh-100  home" >
  <div class="container  h-100 ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5 ">
        <div class="card shadow-2-strong trans  mx-4" >
          <div class="card-body p-5 text-center">

            

            <div class="form-outline mb-4">
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder="&#xf0e0; Email" />
              
            </div>

            <div class="form-outline mb-0">
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="&#xf084; Password" />
              
            </div>

           
            <div class="form-check d-flex justify-content-between mb-4">
           <div>
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
              </div>
              <div class="form-check mb-4">
              
              <label class="form-check-label" for="form1Example3"> Forgot password?</label>
            </div>
            </div>
            

            <button class="btn btn-primary submit" type="submit">Login</button>
            <p>Don't have Account. <a class="signup" href="/4">Sign up!</a>
            </p>

            

            

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
}
export default Home;