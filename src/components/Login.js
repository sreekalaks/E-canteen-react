import './Login.css'


import "./Login.css"

export default function Login() {
  return (
    
    <div className="login">
       <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput"  placeholder="Enter your email..."/>
        <label>Password</label>
        <input type="password" className="loginInput"  placeholder="Enter your password..."/>
        <button className="loginButton">Login</button>
       </form>
       <button className="loginRegisterButton">
       </button>

    </div>
  )
}