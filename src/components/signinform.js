import React from "react";
import './signinform.css';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Register from "./register";

class SignInForm extends React.Component{
    render(){
    return(

        <form>
            <div id="formdiv">
                     <h2>Sign In</h2>
                    <hr/>

            <label>Email Address or SBTier Company ID</label>
            <input type="text"/><br/>

            <label>Password</label>
            <input type="password"/><br/>
            
            <input type="submit" value="SIGN IN" />
            
            <br/>Don't have an account?
        
            <p id="reg">
                <Link to='/register'>Register now.</Link>
            </p>

            <Routes>
                    <Route exact path='/register' element={< Register />}></Route>
            </Routes>
            </div>
        </form>
        
    );
    }
}
export default SignInForm;