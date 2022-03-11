import React from 'react';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Products from './products';
import Applications from './applications';
import Design from './design';
import Support from './support';
import Company from './company';
import SignInForm from './signinform';
import Register from "./register";
import './home.css';

class Home extends React.Component{
    render(){
    return(
        <Router>
        <div>
            
            <img src="img1_logo.jpg" width="70px"/>

            <h4>
                <Link  id="prodId" to='/products'>PRODUCTS</Link>
            </h4>
            <h4>
                <Link id="appId" to='/applications'>APPLICATIONS</Link>
            </h4>
            <h4>
                <Link id="desId" to='/design'>DESIGN</Link>
            </h4>
            <h4>
                <Link id="suppId" to='/support'>SUPPORT</Link>
            </h4>
            <h4>
                <Link id="compId" to='/company'>COMPANY</Link>    
            </h4>
            <h3>
                <Link id="signId" to='/signinform'>SIGN IN</Link>                
            </h3>
            <Routes>
                    <Route exact path='/products' element={< Products />}></Route>
                   <Route exact path='/applications' element={< Applications />}></Route>
                   <Route exact path='/design' element={< Design />}></Route>
                   <Route exact path='/support' element={< Support />}></Route>
                   <Route exact path='/company' element={< Company />}></Route>
                   <Route exact path='/signinform' element={< SignInForm />}></Route>
                   <Route exact path='/register' element={< Register />}></Route>

            </Routes>

        </div>
        </Router>
    );
}
}
  export default Home;