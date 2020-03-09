import React from "react";
import "./App.css";
import './router/css/bootstrap.min.css';
import brand from './router/photos/klogo.png'
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";




import socialmedia1 from './router/photos/so3.jpeg'
import socialmedia2 from './router/photos/so2.png'
import socialmedia3 from './router/photos/so4.png'
import socialmedia4 from './router/photos/so1.jpeg'



import startupsimage1 from './router/photos/ko5.png'
import startupsimage2  from './router/photos/ko4.png'
import startupsimage3 from './router/photos/ko2.png'





export default function App() {
  return (
    <Router> 
      
      <div>
        <nav className="navbar " >
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"/><img src={brand} width="150" height="45" />
                </div>
                


              <ul className="nav navbar-nav navbar-right">
                <li>
                <Link to="/"><b>Home</b> </Link>
                  </li>
                <li>
                <Link to="/startups"><b> Startups</b></Link>
                  </li>
                <li>
                <Link to="/register"><b>Register</b> </Link>
                  </li>
                <li>
                <Link to="/login"><b> Login</b></Link>
                  </li>
              </ul>
            </div>
            </nav><br/>

            <Switch>
              <Route path="/" exact component={Home}  />
              <Route path="/startups" component={Startups} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
      
    
            </div>
      </Router>
  );
}



function Home() {
  return(
    <div>
    <div className="home">
    <div className="you">
        <h1 id="headtext">KAWOLEGAL</h1>
            <p id="para"><b>A collaborative ecosystem for problem</b></p>
            <p id="para"><b>solvers and support for startups</b> </p>

            <Link id="registerbutton" to="/register"><b>REGISTER NOW</b> </Link>
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



function Startups() {
  return(
    <div>
          <div className="container">
			<div className="row">
				<div className="col-md-2">
					<img src={startupsimage1 } className="img-responsive"/>
				</div>
				<div className="col-md-10">
					<div> 
						<a href="#"/><h3>Think and Zoom</h3> 
					</div>
					<br/>
					<div>
					   <p>Providing solutions for the visually impaired such as mind
						 controlled zooming,and wearable conyrolled zooming
					   </p>
					</div>
					<br/>
					<div><a href="#"/><button id="but">see full details</button></div>
				</div>
			</div>
             <br/>
             <br/>

			<div className="row">
				<div className="col-md-2">
					<img src={startupsimage2 } className="img-responsive"/>
				</div>
				<div className="col-md-10">
					<div> 
						<a href="#"><h3>Slatecube</h3> </a>
					</div>
					<br/>
					<div>
					   <p>
					   	Slatecube helps job seekers develop job-relevant skills ,gain experience ,and land well paying jobs through world-className up-skilling courses and virtual intenships
					   </p>
					</div>
					<br/>
					<div><a href="#"/><button id="but">see full details</button></div>
				</div>
			</div>
            <br/>
			<br/>
			<div className="row">
				<div className="col-md-2">
					<img src={startupsimage3 } className="img-responsive"/>
				</div>
				<div className="col-md-10">
					<div> 
						<a href="#"/><h3>Sleekjob Academy</h3> 
					</div>
					<br/>
					<div>
					   <p>
					   	Trains world class developers in ghana and matches them to employment opportunities

						 
					   </p>
					</div>
					<br/>
					<div><a href="#"/><button id="but">see full details</button> </div>
				</div>
			</div>
		</div>
		<br/>

       <div id="footer">
		<div className="id">
		   <li><a href="#"/><img src={ socialmedia1 } width="40" height="25"/></li>
		   <li><a href="#"/><img src={ socialmedia2 } width="40" height="25"/></li>
		   <li><a href="#"/><img src={ socialmedia3 } width="40" height="25"/></li>
		   <li><a href="#"/><img src={ socialmedia4 } width="40" height="25"/></li>
        </div>
		<p> &copy2017 kawolegal.All rights reserved</p>	
	</div>

<br/>
<br/>
</div>    
  );
}



function Register() {
  return(
  
<div>

{
    function myFunction() {
      var  x, text;
      x = 
      document.getElementById("exampleInputPassword1") .value;
      if (isNaN(x) || x < 1 || x > 10)
        {
          text = "Password not valid";
        } else {
          text = "Password ok";
        }
        document.getElementById("demo") .innerHTML =text;
    }
}
  
<div className="container ">
	     	<div className="row">
	     		<h4><b>Join Kawolegal.sign up to get your startup listed now!</b> </h4>
	     	</div>
	     </div>

	     <br/>



    <div className="container">
    <div className="row">
          <form name="myForm">
         
            <div className="form-group">
              <label for="exampleInputemail1">Full Name</label>
              <input type="text" className="form-control" id="exampleInputemail1" placeholder="Full Name" required/>
            </div>

             <div className="form-group">
              <label for="exampleInputfullname1">Email Address</label>
              <input type="email" className="form-control" id="exampleInputfullname1" placeholder="Email Address" required/>
            </div>

            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
            </div>
                                <p id="demo"></p>
          <div className="form-group">
            <label for="exampleInputPassword1">Confirm pasword</label>
            <input type="password" className="form-control" id="exampleconfirmPassword1" placeholder="Confirm Password" required/>
          </div>
          <p id="mine"></p>
           <br/>
            <button type="button" className="btn btn-primary"   onclick="myFunction()"> submit</button>
         </form>
     </div>
   </div>

   <br/> 
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

function Login() {
  return(
    <div>
      <div className="container  ">
	     	<div className="row">
	     		<h4><b>Already a Member? Login to add your startup</b>.</h4>
	     	</div>
	     </div>

          <div className="container">
	          <div className="row">
                  <form action="/action_page,php">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" name="username" id="letter" required placeholder="Email address"/>
                    </div>

                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control"  pattern="(?-.*\d) (?-.*[a-z]) (?-.*[A-Z]) . {8,}"
                      title="must contain  at least one number and one uppercase and lowercase letter,and at least 8 or more characters
                              " required   placeholder="Password"/>
                    </div>

                    <div className="container">
                      <div className="form-group form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox"/>Remember me
                        </label>
                      </div>
                    </div>

                 
                   <br/>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                 </form>
             </div>
           </div>
    <div className="container">
      
<div id="message">
  <h3>password must contain the following:</h3>
  <p id="letter" className="invalid" >A<b>lowercase</b>letter</p>
  <p id="capital" className="invalid">A<b>capital (uppercase)</b>letter</p>
  <p id="number" className="invalid">a<b>number</b></p>
  <p id="length" className="invalid">Minimum<b>8characters</b></p>
</div>
    </div>       


           <br/> 
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


