import './navbar.css'
export default function Navbar() {
  return (
    <div className='Navbar'>
     <div className='navContainer'>
        <span className='logo'> jimibooking</span>
        <div className='navIte ms'>
            <button className='navButton'>Register</button>
            <button className='navButton'>Login</button>
        </div>
     </div>
    </div>
  )
}
