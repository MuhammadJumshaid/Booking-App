import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <div className='login'>
    <span className='loginTitle'>Login</span>
      <form className='loginForm'>
        <label>Email</label>
        <input type='text' className='loginInput' placeholder=' Enter your email'/>
        <label>Possward</label>
        <input type='possward' className='loginInput'  placeholder=' Enter your possward'/>
        <button className='loginButton'>Login</button>
      </form>
      <button className='loginRegisterButton'>
      <Link className='link' to = '/register' >Register</Link>
      </button>
    </div>
  )
}
