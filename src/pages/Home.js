import React from 'react'
import Navbar from '../components/Navbar';

export default function Home() {
  
 return (
 <div> 
<Navbar/>
<div className="main-div">
 <form>
<div className="over-lay">
    <h1><span style={{color:'white'}}>
      BRING HOME A<br/> BEAUTIFUL</span><br/><span style={{color:'orange'}} >INTERIOR</span> 
    </h1>
    </div>
    
    </form>
    <div className="container">
        <form className>
            <p style={{fontSize: "31px", color:"brown", textAlign: "center" , right: "5%"}}>Designs for Every Bugdets</p>
            <label >
              <input type="text" placeholder="Name" id="name"/>
            </label><br/>
            <label >
              <input type="email" placeholder="Email" id="name"/>
            </label><br/>
            <label >
              <input type="number" placeholder="Phone Number" id="field"/>
            </label> <br/>
            <label for="update" style={{color: "brown", fontFamily: "serif", boxSizing: "30px", width: "30%", padding: "7%"}}>
            <input type="checkbox"  />
               Send me updates on whatsapp</label><br></br><br/>
               <label>
                <input type="text"  placeholder="property Name" id="field"/></label><br/><br/>
                <label >
                    <button className="quotes">GET FREE QUOTES</button>
                    </label><br/>
                    
                    
                    <p style={{ padding: "6%"}}>By Submitting this form, You agree to <a href="#" style={{textDecoration: "none"}}><span style={{color: "orange"}}>privacy policy</span></a> & <a href="#" style={{textDecoration: "none"}}><span style={{color: "orange"}}>terms and conditions</span></a></p>
                    
                    </form>
                    </div>
</div>
</div>

    
    



); 
  }
  

    
    
  




