import React from 'react';
import "./router/kawolegal1.css";

import socialmedia1 from './router/photos/so3.jpeg'
import socialmedia2 from './router/photos/so2.png'
import socialmedia3 from './router/photos/so4.png'
import socialmedia4 from './router/photos/so1.jpeg'

function Home() {
      return (
        <div>
        <div className="home">
        <div className="you">
            <h1>KAWOLEGAL</h1>
                {/* <P id="para">A collaborative ecosystem for problem</P> */}
                <p id="para">solvers and support for startups</p>
                <div id="anchor"><a id="one" href="kawolegal-3.html"/>Register Now</div>
                </div>
           </div>
            <br/>
    
      <div id="footer">
        <div className="id">
           <li><a href="#"/><img src={socialmedia1 } width="40" height="25"/></li>
           <li><a href="#"/><img src={socialmedia2 } width="40" height="25"/></li>
           <li><a href="#"/><img src={socialmedia3 } width="40" height="25"/></li>
           <li><a href="#"/><img src={socialmedia4 } width="40" height="25"/></li>
            </div>
        <p> &copy2017 kawolegal.All rights reserved</p>	
      </div>
      </div>
        
      );
  }
  
  export default Home;