import React from 'react';
 import './register.css';
class Register extends React.Component{
    render(){
    return(
        
        <form>
            <div id="formdiv">
                     <h2>Sign In</h2>
                    <hr/>

            <label><b>First Name *</b></label>
            <input type="text"/><br/>

            <label><b>Last Name *</b></label>
            <input type="text"/><br/>

            <label><b>Email *</b>(Use work email for faster response)</label>
            <input type="email"/><br/>

            <label><b>Retype Email *</b></label>
            <input type="email"/><br/>

            <label><b>Password *</b>
             &nbsp;(Minimum 8-48 characters, include 3 of the following<br/>
            &nbsp;&nbsp; character types: uppercase, lowercase, numeric, special character)</label>
            <input type="password"/><br/>

            <label><b>Retype Password *</b></label>
            <input type="password"/><br/>

            <label><b>Full Company Name *</b></label>
            <input type="text"/><br/>

            <label><b>Territory/Country</b></label>
            <select>
                <option>Please select Country</option>
                <option>United States</option>
                <option>Bangladesh</option>
                <option>India</option>
                <option>Malaysia</option>
            </select>
            <input type="submit" value="SAVE" />
            <input type="button" value="CANCEL" />
            </div>
        </form>
    );
    }
}
export default Register;