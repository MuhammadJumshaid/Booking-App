// import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
export default function Topbar() {
  // const user = true;
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
      <FacebookIcon className='topIcon' />
      <TwitterIcon className='topIcon'/>
      <PinterestIcon className='topIcon' />
      <InstagramIcon className='topIcon' />
      </div>
      <div className='topCenter'>
         <ul className='topList'>
         

         <Link className='link' to='/'> 
         <li className='topListItem'>HOME</li>
         </Link>
         <Link className='link' to='./about'> 
         <li className='topListItem'>ABOUT</li>
         </Link>
         <Link className='link' to='/contact'> 
         <li className='topListItem'>CONTACT</li>
         </Link>
         <Link className='link' to='/write'> 
         <li className='topListItem'>WRITE</li>
         </Link>
         <Link className='link' to='/logout'> 
         <li className='topListItem'>{user && "LOGOUT"}</li>
         </Link>
         
         </ul>
      </div>
      <div className='topRight'>
      { user?
      ( <img className='topImg' 
      src='https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
      ) : (
        <ul className='topList'>
        <li className='topListItem'>
        <Link className='link' to='/Register'> 
          REGISTER
         </Link>
         </li>
         <li className='topListItem'>
        <Link className='link' to='/login'> 
         LOGIN
         </Link>
         </li>
         </ul>

      )

       }
       
       <SearchIcon className='topSearchIcon' />
      </div>
   
    </div>
  ) 
}
