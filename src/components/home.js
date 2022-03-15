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
        <div d="imgdiv">
            <img id="secimg" src="img2.jpg"/>
        </div>
        <div>
            <center><h1>Together, we accelerate the breakthroughs that advance<br/>our world.</h1></center>
            <div id="itemsdiv">
            <span id="autospan">&#128664;</span>
            <p id="autopara">AUTOMOBILE</p>

            <span id="comspan">&#128225;</span>
            <p id="compara">COMMUNICATION INFRASTRUCTURE</p>

            <span id="induspan">&#128736;</span>
            <p id="induspara">INDUSTRIAL</p><br/></div>

            <div id='itemsdiv2'>
            <span id="mobilespan">&#128241;</span>
            <p id="mobilepara">MOBILE</p>

            <span id="smartcityspan">&#127961;</span>
            <p id="smartcitypara">SMART CITY</p>

            <span id="smarthomespan">&#127984;</span>
            <p id="smarthomepara">SMART HOME</p>

            </div>
        </div>
       
        <center><h1>True innovation requires a big toolkit.</h1></center>
        <div id="div3">
        <span class="exspan">
        <p><b>&nbsp;&nbsp;Product Finders</b></p>
        <p id="prpara">Choose the right product, quickly, with our <br/>selection of product finding tools: Product 
            <br/>Advisor, Product Selector and Cross Reference.</p>
        </span>

        <span class="exspan">
        <p><b>&nbsp;&nbsp;Software Center</b></p>
        <p id="prpara">Search our catalog of commercial-grade <br/>software, royalty-free demonstration <br/>software and code samples.</p>
        </span>

        <span class="exspan">
        <p><b>&nbsp;&nbsp;SBTier Designs</b></p>
        <p id="prpara">Explore reference designs and system <br/>solutions to jump start your design and get<br/> to production faster.</p>
        </span>

        <span class="ex2span">
        <p><b>&nbsp;&nbsp;Evaluation and Development Boards</b></p>
        <p id="prpara">Find quick links to dozens of tools and resources <br/> that help you save time and reduce<br/>  design complexity.</p>
        </span>

        <span class="ex2span">
        <p><b>&nbsp;&nbsp;Community</b></p>
        <p id="prpara">Join our open forum with thousands of <br/>on-going technical discussions moderated by<br/> SBTier experts.</p>
        </span>

        <span class="ex2span">
        <p><b>&nbsp;&nbsp;Training</b></p>
        <p id="prpara">Take your technical expertise further with<br/> online and hands-on instruction designed to<br/> unlock the potential of our products.</p>
        </span>


        </div>
        <div>
            <span id="firstspan">
                <h2>A Smarter World<br/>Will Be More<br/>Sustainable</h2>
                <p id="paras">As our digitally-enhanced world is<br/>
                evolving to anticipate and automate<br/>
                people's needs, SBTier strives to engage,<br/>
                protect and respect our relationship with <br/>
                the wider world.</p>
                <p id="suspara">SUSTAINABILITY</p>
            </span>
            <span id="secondspan">
                <h2>Join the Future of <br/>Innovation</h2>
                <p id="paras">SBTier employees embrace new <br/>
                technologies and seize opportunities to <br/>
                advance our world. We encourage<br/>
                 passionate, talented people looking for <br/>
                 the freedom to innovate to come join our <br/>
                 team.</p>
                <p id="suspara">CAREERS</p>
            </span>
            <span id="thirdspan">
            <h2>Long-Term Success<br/>Through R&amp;D<br/>
                Investment </h2>
                <p id="paras">Our focus is to invest in system solutions <br/>
                that will drive long-term, profitable growth, <br/>
                superior free cash and robust capital to <br/>
                owners.</p>
                <p id="suspara">INVESTOR RELATIONS</p>
                
            </span>
        </div>
        </Router>
        
    );
}
}
  export default Home;