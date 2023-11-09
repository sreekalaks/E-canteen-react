import React from 'react'
import './Nav.css'


function Nav() {
  return (
    
    <div>
         <div className='nav'>
        <div className='head'> 
            E-canteen-React-UI
            <button className='btn'>login</button>
        </div>
            </div>
<div>


            <h1 className='heading'>Welcome</h1>
            <div className='container'>
          <div className='Login'>  

       <form className="loginForm">

        <label>Email</label>
        <input type="text" className="loginInput"  placeholder="Enter your email..."/>
        <label>Password</label>
        <input type="password" className="loginInput"  placeholder="Enter your password..."/>
        <button className="loginButton">Login</button>
       </form>
       

    </div>
    </div>
    </div>


          

    </div>
  )

}
export default Nav
