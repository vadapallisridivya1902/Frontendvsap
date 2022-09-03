import React from "react"; 
import "./Home.css"; 
 
function Home() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK61O13MdrhSkfEqRW7haA2bVinRVeORyd0ZeaLPUjXN5tevFZ7_XGVpxZfrvoS_bNvLQ&usqp=CAU" alt="profile" className="profile"/>
           </div>


         </div>
         <div>
           <h3>Login</h3>
           <div className="First-input">
            
             <input type="text" placeholder="username" className="name"/>
           </div>
           <div className="second-input">
    
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button> 
          </div> 
          <br></br>
            <p className="link">
              <a href="#">Forgot password ? </a> Or<a href="#"> Sign Up</a> <br></br>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}
 
export default Home;