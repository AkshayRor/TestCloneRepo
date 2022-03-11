import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from './about';
import Careers from './careers';

import Media from './media';
import Contact from './contact';
import Subscribe from './subscribe';
import './footer.css';

class Footer extends  React.Component{
    render(){
        return(
            <Router>
            <div id="footdiv1">
                
                <img id="footimg" src="img1_logo.jpg" width="70px"/><br/><br/>
            <h4>
                <Link  id="aboutId" to='/about'>ABOUT SB</Link>
            </h4>
            <h4>
                <Link id="careerId" to='/careers'>CAREERS</Link>
            </h4>
            
            <h4>
                <Link id="mediaId" to='/media'>MEDIA</Link>
            </h4>
            <h4>
                <Link id="contactId" to='/contact'>CONTACT</Link>    
            </h4>
            <h4>
                <Link id="subscribeId" to='/subscribe'>SUBSCRIBE</Link>                
            </h4>
            <Routes>
                    <Route exact path='/about' element={< About />}></Route>
                   <Route exact path='/careers' element={< Careers />}></Route>
                   
                   <Route exact path='/media' element={< Media />}></Route>
                   <Route exact path='/contact' element={< Contact />}></Route>
                   <Route exact path='/subscribe' element={< Subscribe />}></Route>
                   
            </Routes>
            <br/> <br/> 
            <p id="footpara">&copy;2022-present SBTier Semiconductors. All rights reserved.</p>
            </div>
        </Router>
        );
    }
}
export default Footer;