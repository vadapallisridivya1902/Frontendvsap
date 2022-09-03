import React from "react"; 
import "./Home.css"; 
import {useNavigate} from "react-router-dom"

function Home() {
    const navigate =  useNavigate();
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
            <form id="form">
                <div className="First-input">
                    <input name="email" type="text" placeholder="email" className="name"/>
                </div>
                <div className="second-input">
                    <input name="password" type="password" placeholder="password" className="name"/>
                </div>
                <div className="login-button">
                <button>Login</button> 
                </div> 
            </form>
            <br></br>
                <p className="link">
                <a href="#">Forgot password ? </a> Or<a href="signup"> Sign Up</a> <br></br>
                </p>
            </div>
        </div>
        

        </div>
        </div>
    );
}
 
export default Home;